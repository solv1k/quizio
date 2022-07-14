const DATA_COMPONENT_ID = "data-quizio-id"
const DATA_ACTION_ID = "data-quizio-action-id"
const DATA_ACTION_FUNC = "Quizio.action('$').start(event)"

/**
 * DOM helper
 */
class DOM {
    static getRootChild(component, el) {
        const componentTemplate = component.template().replace(/[\r\n]/gm, '').trim()
        
        el.innerHTML = componentTemplate
        const componentDomChilds = el.childNodes

        if (!componentDomChilds.length) {
            throw new Error("Component doesn't have a child nodes for render() method.")
        }

        return componentDomChilds[0]
    }

    static getHtmlWithAttributes(component) {
        const el = document.createElement("div")
        const rootDomChild = DOM.getRootChild(component, el)

        rootDomChild.setAttribute(DATA_COMPONENT_ID, component.id)

        for (let [key, value] of Object.entries(component.attributes)) {
            rootDomChild.setAttribute(key, value)
        }

        for (let [key, action] of Object.entries(component.events)) {
            rootDomChild.setAttribute(key, DATA_ACTION_FUNC.replace("$", action.id))
        }

        return el.innerHTML
    }

    static getElementById(id) {
        return document.getElementById(id)
    }

    static getElementByComponentId(id) {
        return document.querySelector(`[${DATA_COMPONENT_ID}="${id}"]`)
    }

    static getElementByActionId(id) {
        return document.querySelector(`[${DATA_ACTION_ID}="${id}"]`)
    }

    static extractClassList(className) {
        return className.split(" ")
    }
}

export { DOM, DATA_COMPONENT_ID, DATA_ACTION_ID }
