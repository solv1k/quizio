const DATA_COMPONENT_ID = "data-quizio-id"
const DATA_ACTION_ID = "data-quizio-action-id"
const DATA_ACTION_FUNC = "Quizio.getAction('$').start(event)"

/**
 * DOM helper
 */
class DOM {
    /**
     * Returns splitted class name.
     * 
     * @param {string} className 
     * @returns {string} Splitted class name
     */
     static extractClassList(className) {
        return className.split(" ")
    }
    
    /**
     * Returns root child HTML element.
     * 
     * @param {RenderableComponent} component 
     * @param {HTMLElement} el 
     * @returns {HTMLElement}
     */
    static getRootChild(el, template) {
        const componentTemplate = template.replace(/[\r\n]/gm, '').trim()
        
        el.innerHTML = componentTemplate
        const componentDomChilds = el.childNodes

        if (!componentDomChilds.length) {
            throw new Error("Component doesn't have a child nodes for render() method.")
        }

        return componentDomChilds[0]
    }

    /**
     * Returns HTML-string for component.
     * 
     * @param {RenderableComponent} component 
     * @returns {string} HTML-string
     */
    static getHtmlWithAttributes(component, preview = false) {
        const el = document.createElement("div")
        const template = preview ? component.previewTemplate() : component.template()
        const rootDomChild = DOM.getRootChild(el, template)

        rootDomChild.setAttribute(DATA_COMPONENT_ID, component.id)

        if (preview) {
            for (let [key, action] of Object.entries(component.previewEvents)) {
                rootDomChild.setAttribute(key, DATA_ACTION_FUNC.replace("$", action.id))
            }
        } else {
            for (let [key, value] of Object.entries(component.attributes)) {
                rootDomChild.setAttribute(key, value)
            }
    
            for (let [key, action] of Object.entries(component.events)) {
                rootDomChild.setAttribute(key, DATA_ACTION_FUNC.replace("$", action.id))
            }
        }

        return el.innerHTML
    }

    /**
     * Returns HTML element by ID.
     * 
     * @param {string} id 
     * @returns {HTMLElement | null}
     */
    static getElementById(id) {
        return document.getElementById(id)
    }

    /**
     * Returns HTML element by component ID.
     * 
     * @param {string} id 
     * @returns {HTMLElement | null}
     */
    static getElementByComponentId(id) {
        return document.querySelector(`[${DATA_COMPONENT_ID}="${id}"]`)
    }

    /**
     * Returns HTML element by action ID.
     * 
     * @param {string} id 
     * @returns {HTMLElement | null}
     */
    static getElementByActionId(id) {
        return document.querySelector(`[${DATA_ACTION_ID}="${id}"]`)
    }
}

export { DOM, DATA_COMPONENT_ID, DATA_ACTION_ID }
