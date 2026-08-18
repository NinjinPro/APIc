import { HtmlElement } from "./manager.js"
import { escapeHtml } from "./utils.js"

class ConsoleManager {
    constructor() {
        this.consolesArea = new HtmlElement('consoles')
        this.cleanConsole = new HtmlElement('cleanConsole')
        this.showHideConsole = new HtmlElement('showHideConsole')
        this.consoleCounter = new HtmlElement('consoleCount')
        
        this.consoleCount = 0
    }
    
    paste(data, type='log') {
        const el = document.createElement('div')
        const classes = ['consolee', type]
        
        classes.forEach(cls => el.classList.add(cls))
        el.innerText = escapeHtml(data.join(' '))
        
        this.consolesArea.appendChild(el)
        
        // update console count
        ++this.consoleCount
        this.updateConsoleCount()

    }
    
    updateConsoleCount() {
        this.consoleCounter.setHtmlText(`(${this.consoleCount})`)
    }
    
    log(...data) {
        this.paste(data, 'log')
    }
    
    error(...data) {
        this.paste(data, 'error')
    }
    
    init() {
        this.showHideConsole.data.isHide = true
        
        // delete console info
        this.cleanConsole.addEventH('click', ()=>{
            if(!this.consoleCount) return
            this.consolesArea.setHtmlText('')
            
            this.showHideConsole.click()
            this.consoleCount = 0
            this.updateConsoleCount()
        })
        
        // show / hide consolees
        this.showHideConsole.addEventH('click', ()=>{
            if(!this.consoleCount) return
            
            const isHide = this.showHideConsole.data.isHide
            // this.log(isHide)
            
            if(!isHide) {
            	this.showHideConsole.setHtmlText('Show')
                this.consolesArea.htmlEl.style.height = 0
            } else {
            	this.showHideConsole.setHtmlText('Hide')
                this.consolesArea.htmlEl.style.height = '50vh'
            }
            
            this.showHideConsole.data.isHide = !isHide
            // this.log(!isHide)
            
        })
    }
}

const consoler = new ConsoleManager()
consoler.init()

export default consoler;