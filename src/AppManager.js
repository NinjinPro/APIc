import {
    HtmlElement,
    UrlTextAreaManager,
    ButtonManager,
    RequestTextAreaManager,
    ResultTextAreaManager
} from './manager.js';

import consoler from './ConsoleManager.js'

import { apiRequest } from "./utils.js"


class AppManager {
    constructor() {
        // method selector
        this.methodSelector = new HtmlElement('method-selector');
        
        // url input field
        this.urlInput = new UrlTextAreaManager('url-input');
        
        // send button
        this.sendBtn = new ButtonManager('send-btn')
        
        // areas
        this.reqA = new RequestTextAreaManager("req-area")
        this.resA = new ResultTextAreaManager("res-area")
    }
    
    init() {
        this.urlInput.setValue('http://localhost:8080/api/ping')
        
        // form field
        // this.form = new HtmlElement('form-id')
        
        this.sendBtn.addEventH('click', async (e) => {
            e.preventDefault()
            
            // alert(new Date().toString())
            
            await this.handleUserRequest()
        })
        
        consoler.log('New App initialized')
    }
    
    async handleUserRequest() {
        
        const url = this.urlInput.getValue()
        const method = this.methodSelector.getValue()
        const data = this.reqA.getValue()
        
        const reqOptions = {
            method,
            data: data ? JSON.parse(data) : null,
        }
        
        // const getResponse = async () => {
            let response = null;
            
            try {
                response = await apiRequest(url, reqOptions);
            } catch(err) {
                response = err.message
                consoler.error(err)
            }
            
            this.resA.setValue(JSON.stringify(response))
        // }
        consoler.log('url', url)
        consoler.log('data', JSON.stringify(reqOptions))
    }
}

export default AppManager;