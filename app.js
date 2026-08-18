import AppManager from "./src/AppManager.js"
import consoler from "./src/ConsoleManager.js"

window.addEventListener('DOMContentLoaded', () => {
    const appManager = new AppManager()

    appManager.init()
    consoler.log('hello, there')
})
