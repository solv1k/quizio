import Container from '../components/Container.js';
import { DOM } from '../DOM.js';

/**
 * Application container (main Quizio component which contains other containers).
 */
class AppContainer extends Container {
    constructor(appId = "app") {
        super({ storeId: "app" })
        this.appId = appId
    }

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <div class="quizio-app-container">
                ${this.renderChilds()}
            </div>
        `
    }

    /**
     * Render Quizio application.
     */
    render() {
        // trying get HTML-element by ID
        const appDomElement = DOM.getElementById(this.appId)

        // throws if contrainer for rendering HTML not found
        if (!appDomElement) {
            throw new Error("HTML element for building Quizio app was not found by id.")
        }

        // render application component in DOM
        appDomElement.innerHTML = super.render()
    }
}

export default AppContainer
