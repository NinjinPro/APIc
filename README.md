# API CLIENT

<p align="center">
  <img src="https://img.shields.io/badge/status-MVP-orange?style=for-the-badge" alt="Status: MVP">
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License: MIT">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JavaScript">
  <img src="https://img.shields.io/badge/PWA-supported-blue?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA supported">
</p>

<p align="center">
  <strong>A lightweight, mobile-friendly API client for testing REST APIs directly from a browser.</strong>
</p>

<p align="center">
  Test APIs from Android, mobile browsers, desktop browsers, or Termux without installing a heavy development environment.
</p>

<p align="center">
  <a href="https://github.com/NinjinPro/APIc">Repository</a>
  ·
  <a href="#features">Features</a>
  ·
  <a href="#installation">Installation</a>
  ·
  <a href="#roadmap">Roadmap</a>
</p>

---

## Overview

**API CLIENT** is a lightweight web and mobile interface for testing backend REST APIs directly from a browser.

The project was designed especially for developers working from **Android devices, mobile browsers, or Termux environments** who need a quick way to send HTTP requests and inspect API responses without depending on a large development environment.

The application is intentionally built with:

- HTML
- CSS
- Vanilla JavaScript
- Browser-native `fetch()`
- Service Worker APIs
- PWA capabilities

There are **zero runtime dependencies**.

---

## Why This Project Exists

Testing backend APIs from a mobile device can become inconvenient, especially when working with local development servers or browser-based environments.

This project was created from a practical need:

> **A simple, lightweight API testing interface that works well on Android and does not require a large development environment.**

The implementation deliberately keeps the technology stack simple:

- **HTML** for structure
- **CSS** for the interface
- **Vanilla JavaScript** for application logic
- **Fetch API** for HTTP requests
- **Service Worker** for offline functionality
- **PWA resources** for an installable app-like experience
- **No external runtime dependencies**

---

## Features

### Current Features

- Send HTTP API requests directly from the browser
- Custom request URLs
- HTTP method selection
- Request body editor
- Response viewer
- Mobile-friendly responsive interface
- Offline support
- Progressive Web App support
- Built-in application console
- Debugging-oriented console output
- Zero external dependencies
- Lightweight architecture
- Android-oriented project assets

### Built-in Console

One of the project's notable features is its embedded console system.

The console is designed to make debugging easier when developing and testing the application from a mobile browser.

It provides a dedicated area for:

- Application messages
- Errors
- Debugging information
- Runtime feedback

This reduces the need to constantly switch between the application and browser developer tools.

---

## How It Works

The basic request workflow is intentionally simple:

```
┌─────────────────────┐
│    Enter API URL    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Select HTTP Method  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Enter Request Body  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Send Request     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Browser Fetch API │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Display API Response│
└─────────────────────┘
```

### Typical Usage

1. Enter the API URL.
2. Select the HTTP method.
3. Enter a request body when required.
4. Send the request.
5. Inspect the returned response.
6. Use the embedded console when debugging application behavior.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Application structure |
| **CSS3** | UI and responsive styling |
| **Vanilla JavaScript** | Application logic |
| **Fetch API** | HTTP requests |
| **Service Worker** | Offline and PWA functionality |
| **Web App Manifest** | PWA installation metadata |
| **Python 3.x** | Optional local development server |
| **Android Resources** | Mobile application and PWA assets |

### Dependencies

The application is intentionally **dependency-free at runtime**.

There is no need for:

- `npm install`
- `pip install`
- A virtual environment
- A database
- A backend server

---

## Project Structure

```
.
├── LICENSE
├── app.js
├── css
│   ├── console.css
│   └── index.css
├── devserver.py
├── index.html
├── mobile
│   ├── android
│   │   ├── drawable
│   │   ├── icons
│   │   │   ├── icon-192.png
│   │   │   └── icon-512.png
│   │   ├── mipmap-anydpi-v26
│   │   │   └── ic_launcher.xml
│   │   ├── mipmap-hdpi
│   │   │   ├── ic_launcher.png
│   │   │   └── ic_launcher_round.png
│   │   ├── mipmap-mdpi
│   │   │   ├── ic_launcher.png
│   │   │   └── ic_launcher_round.png
│   │   ├── mipmap-xhdpi
│   │   │   ├── ic_launcher.png
│   │   │   └── ic_launcher_round.png
│   │   ├── mipmap-xxhdpi
│   │   │   ├── ic_launcher.png
│   │   │   └── ic_launcher_round.png
│   │   ├── mipmap-xxxhdpi
│   │   │   ├── ic_launcher.png
│   │   │   └── ic_launcher_round.png
│   │   └── values
│   │       └── colors.xml
│   ├── manifest.json
│   └── mobile.js
├── src
│   ├── AppManager.js
│   ├── ConsoleManager.js
│   ├── manager.js
│   └── utils.js
├── struct.md
└── sw.js
```

### Main Components

#### `app.js`

Main application entry point and application-level behavior.

#### `src/`

Contains the core JavaScript managers and reusable utilities.

| File | Purpose |
|---|---|
| `AppManager.js` | Application management |
| `ConsoleManager.js` | Embedded console functionality |
| `manager.js` | Application management logic |
| `utils.js` | Reusable utilities |

#### `css/`

Contains the application's stylesheets.

| File | Purpose |
|---|---|
| `index.css` | Primary application styling |
| `console.css` | Embedded console styling |

#### `sw.js`

Service Worker responsible for the application's offline and PWA capabilities.

#### `mobile/`

Contains mobile and PWA-related resources, including:

- Web App Manifest
- Android icons
- Android launcher resources
- Mobile-specific JavaScript

#### `devserver.py`

Optional lightweight development server for running the application locally.

---

## Requirements

The project has **zero application dependencies**.

To use the application:

- A modern web browser is required.
- Python 3.x is optional and only required when using the included local development server.

The application itself does not require:

- Node.js
- npm
- pip packages
- A virtual environment
- A database
- A backend server

---

## Installation

Clone the repository and enter the project directory:

```
git clone https://github.com/NinjinPro/APIc.git
cd APIc
```

That's it.

There are no dependencies to install.

---

## Running Locally

The project includes a lightweight Python development server.

Run:

```
python devserver.py 8000
```

Then open:

```
http://127.0.0.1:8000
```

> **Note:** If your local copy uses a different development-server filename, use the actual filename present in your repository.

Python is only required for the local development-server workflow. The application itself is composed of browser technologies and does not require Python in a hosted environment.

---

## Mobile & PWA

API CLIENT was designed with mobile usage in mind.

The interface is responsive and intended to work across:

- Android phones
- Tablets
- Desktop browsers
- Mobile browsers
- Termux-oriented development workflows

The project includes PWA resources:

```
manifest.json
sw.js
```

Together, these allow the application to provide an installable, app-like experience on supported platforms.

---

## API Support

API CLIENT does **not** provide a backend API of its own.

Instead, it acts as a client interface for sending HTTP requests to APIs developed and hosted elsewhere.

The application uses the browser's native `fetch()` API to communicate with target endpoints.

### Request Flow

```
         API CLIENT
             │
             │ HTTP Request
             ▼
┌─────────────────────┐
│    Target REST API  │
└──────────┬──────────┘
           │
           │ HTTP Response
           ▼
       API CLIENT
           │
           ▼
     Response Viewer
```

---

## Offline Support

The application includes offline support through browser technologies and a Service Worker.

The goal is to keep the application interface available even when network connectivity is unavailable.

Some planned offline functionality, such as persistent request history using IndexedDB, is **not yet implemented**.

---

## User Interface

The current interface focuses on functionality and mobile usability rather than visual polish.

### Current

- Responsive layout
- Light theme
- Mobile-oriented interface
- Request editor
- Response viewer
- Embedded debugging console

### Planned

- Improved visual design
- Better color system
- Dark theme
- Resizable interface sections
- Improved user feedback

---

## Debugging Console

The embedded console is one of the project's features that will receive further development.

It was created to make debugging possible directly inside the application, especially when working from a mobile browser.

The console can expose:

- Application messages
- Errors
- Debugging information
- Runtime behavior

This makes it easier to work on the project without relying entirely on browser developer tools.

---

## Testing

There is currently no automated testing suite.

Testing is currently performed manually by:

1. Running the application.
2. Sending requests to target APIs.
3. Inspecting returned responses.
4. Checking the embedded debugging console.
5. Verifying behavior across supported browsers and devices.

Automated testing may be introduced as the project grows.

---

## Deployment

The application has been deployed using **OneCompiler's deployment infrastructure**.

Because the project is a static client-side application, it does not require:

- A production database
- A Python backend
- Server-side API processing
- A package installation step

---

## Current Limitations

The current MVP is intentionally simple and has several limitations:

- The UI still needs visual refinement.
- User experience can be improved.
- The embedded application console and browser console can sometimes overlap conceptually.
- Request customization is currently limited.
- Authentication configuration is not yet available.
- Request parameter management is not yet implemented.
- File uploads are not yet supported.
- The interface cannot yet be freely resized.

---

## Roadmap

Future versions may introduce:

- Improved colors and theming
- Dark mode
- Improved UI/UX
- Better user feedback
- Request URL history and caching
- Authentication configuration
- Advanced request body customization
- File uploads
- Request parameters
- Resizable UI panels
- IndexedDB-based request persistence
- Further mobile and Termux improvements

As the interface becomes more complex, the project may eventually transition toward a more structured frontend architecture using:

**React + Vite + TypeScript + Tailwind CSS**

---

## Contributing

Contributions are welcome.

### Contribution Workflow

```
Fork
  ↓
Create a Branch
  ↓
Make Changes
  ↓
Commit
  ↓
Push
  ↓
Open a Pull Request
```

### Contribution Guidelines

When contributing:

- Keep the project lightweight.
- Prioritize mobile users.
- Consider Termux and mobile development workflows.
- Keep the implementation simple where possible.
- Follow the existing project structure.
- Avoid unnecessary dependencies.
- Follow the project's coding conventions.
- Avoid introducing copyrighted assets or implementations from other API client applications.

---

## License

This project is licensed under the **MIT License**.

See [`LICENSE`](LICENSE) for details.

---

## Acknowledgements

- The **Termux community/team** for making powerful development environments available on Android.
- **OneCompiler** for providing the deployment environment used by the live application.
- The broader web development community for the browser technologies that make a lightweight client like this possible.

---

## Inspiration

This project came from a practical development challenge: testing APIs from an Android/mobile environment while dealing with browser caching behavior and limited development resources.

Instead of building a large application with a complex dependency stack, I decided to create a small API testing client using technologies already available in the browser.

The result is **API CLIENT** — a lightweight, mobile-oriented API testing interface built with plain HTML, CSS, and JavaScript.

---

## Project Status

<p align="center">
  <img src="https://img.shields.io/badge/status-MVP-orange?style=for-the-badge" alt="MVP">
  <img src="https://img.shields.io/badge/progress-in--development-blue?style=for-the-badge" alt="In development">
</p>

The current version focuses on the core API-request workflow and mobile usability.

The project is expected to evolve toward a more polished API development tool as additional request configuration, persistence, authentication, and UI capabilities are implemented.

---

## Author

**NinjinPro**

- GitHub: [@NinjinPro](https://github.com/NinjinPro)
- Email: [gracieuxdevelop@gmail.com](mailto:gracieuxdevelop@gmail.com)

---

## Support

If this project is useful to you, consider giving the repository a ⭐ on GitHub and contributing improvements.

---

## Live Demo

<p align="center">
  <a href="https://192828938399.oneapp.dev">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-Open_API_CLIENT-success?style=for-the-badge" alt="Open Live Demo">
  </a>
</p>

**Live Demo:** https://192828938399.oneapp.dev

**Repository:** https://github.com/NinjinPro/APIc
