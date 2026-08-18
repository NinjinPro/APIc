// import console from './ConsoleManager.js'

export class HtmlElement {
    constructor(htmlId){
        this.htmlId = htmlId
        this.htmlEl = document.getElementById(this.htmlId)
        if(!this.htmlEl) {
            throw new TypeError(`Can't find HtmlElement with id ${this.htmlId}`)
        }
        this.data = {
            id: htmlId,
        }
        //this.htmlEl = { value: '' }
        
        console.log(`Created a new HtmlElement of id (${this.htmlId})`)
    }
    
    click() {
        this.htmlEl.click()
    }
    
    appendChild(child) {
        if(child) {
        	this.htmlEl.appendChild(child)
    	}
    }
    
    addEventH(event, callback) {
        this.htmlEl.addEventListener(event, callback)
    }
    
    getValue(){
        return this.htmlEl.value
    }
    
    setValue(data){
        const val = new String(data)
		this.htmlEl.value = val
        console.log(`set value for "${this.htmlId}" to "${val}"`)
    }
    
    setHtmlText(text) {
        // if(text) {
        	this.htmlEl.innerText = new String(text);
        // }
    }

}

export class TextAreaManager extends HtmlElement {
    constructor(htmlId){
        super(htmlId)
    }
}

export class UrlTextAreaManager extends TextAreaManager {
    constructor(htmlId){
        super(htmlId)
    }
}

export class RequestTextAreaManager extends TextAreaManager {
    constructor(htmlId){
        super(htmlId)
    }
}

export class ResultTextAreaManager extends TextAreaManager {
    constructor(htmlId){
        super(htmlId)
    }
}

export class ButtonManager extends HtmlElement {
    constructor(htmlId){
        super(htmlId)
    }
}



/*
const reqM = new ResultTextAreaManager("req-area")
const resM = new ResultTextAreaManager("res-area")

reqM.setValue('this is request text area')
resM.setValue('this is result text area')
*/


