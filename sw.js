const CACHE_NAME = "api-client-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./app.js",
    "./src/AppManager.js",
    './src/ConsoleManager.js',
    './src/manager.js',
    "./src/utils.js",
    "./css/console.css",
    "./css/index.css",
    "./mobile/manifest.json",
    "./mobile/mobile.js",
    "https://uploads.onecompiler.io/44dh5qf6t/44ygq25b3/icon-192.png",
    "https://uploads.onecompiler.io/44dh5qf6t/44ygq25b3/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    // Only handle GET requests
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .then(networkResponse => {

                        // Cache successful same-origin responses
                        if (
                            networkResponse &&
                            networkResponse.status === 200 &&
                            new URL(event.request.url).origin === self.location.origin
                        ) {
                            const responseToCache = networkResponse.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }

                        return networkResponse;
                    });
            })
            .catch(() => {
                // If offline and the page isn't cached,
                // return the cached index page.
                return caches.match("./index.html");
            })
    );
});
