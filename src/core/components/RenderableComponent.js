import Action from "../actions/Action.js"
import { DOM } from "../DOM.js"
import Component from "./Component.js"

/**
 * This component can be render in DOM.
 */
class RenderableComponent extends Component {
    constructor() {
        super()
        this.attributes = {}
        this.events = {}
        this.previewEvents = {}
        this.childs = []
        this.actions = []
        this.previewer = null
    }

    /**
     * Set previewer for rendering QUIZ preview.
     * 
     * @param {Previewer} previewer 
     */
    setPreviewer(previewer) {
        if (typeof previewer === "object")
            this.previewer = previewer
    }

    /**
     * Get previewer for rendering QUIZ preview.
     * 
     * @returns {Previewer | null}
     */
    getPreviewer() {
        return this.previewer
    }

    /**
     * Set "before refresh" callback for current component.
     * 
     * @param {Action | function} afterRefresh 
     * @returns {RenderableComponent}
     */
    setBeforeRefresh(beforeRefresh) {
        this.beforeRefresh = beforeRefresh
        return this
    }

    /**
     * Set "after refresh" callback for current component.
     * 
     * @param {Action | function} afterRefresh 
     * @returns {RenderableComponent}
     */
    setAfterRefresh(afterRefresh) {
        this.afterRefresh = afterRefresh
        return this
    }

    /**
     * Adding child component.
     * 
     * @param {Component} child 
     * @returns {RenderableComponent}
     */
    addChild(child) {
        this.childs.push(child)
        return this
    }

    /**
     * Bulk adding child components.
     * 
     * @param {array<Component>} childs 
     * @returns {RenderableComponent}
     */
    addChilds(childs = []) {
        childs.forEach((child) => this.addChild(child))
        return this
    }

    /**
     * Get child component by id.
     * 
     * @param {string} id 
     * @returns 
     */
    getChild(id) {
        return this.childs.find((child) => child.id === id)
    }

    /**
     * Remove child component.
     * 
     * @param {Component} child 
     * @returns 
     */
    removeChild(child) {
        this.childs = this.childs.filter((c) => c.id !== child.id)
        return this
    }

    /**
     * Refresh child component.
     * 
     * @param {Component} child 
     * @returns {RenderableComponent}
     */
    refreshChild(child) {
        this.childs = this.childs.filter((c) => c.id !== child.getOldId())
        return this
    }

    /**
     * Returns HTML-string for all rendered child components.
     * 
     * @returns {string} HTML-string
     */
    renderChilds() {
        return this.childs.map((child) => child.render()).join("")
    }

    /**
     * Returns HTML-string for all rendered previews of child components.
     * 
     * @returns {string} HTML-string
     */
    renderChildsPreviews() {
        return this.childs.map((child) => child.renderPreview()).join("")
    }

    /**
     * Returns "true" if component has childs.
     * 
     * @returns {bool}
     */
    hasChilds() {
        return this.childs.length > 0
    }

    /**
     * Adding action to current component.
     * 
     * @param {Action} action 
     * @returns 
     */
    addAction(action) {
        this.actions.push(action)
        return this
    }

    /**
     * Bulk adding actions to current component.
     * 
     * @param {array<Action>} actions 
     * @returns {RenderableComponent}
     */
    addActions(actions = []) {
        actions.forEach((action) => this.addAction(action))
        return this
    }

    /**
     * Returns component action by id.
     * 
     * @param {string} id 
     * @returns {Action | null}
     */
    getAction(id) {
        return this.actions.find((action) => action.id === id) || null
    }

    /**
     * Returns "true" if actions exists in current component.
     * 
     * @returns {bool}
     */
    hasActions() {
        return this.actions.length > 0
    }

    /**
     * Start all actions for current component.
     */
    startActions() {
        this.actions.forEach((action) => action.start())
    }

    /**
     * Set component HTML-attribute by key and return current component.
     * 
     * @param {string} key 
     * @param {string} value 
     * @returns {RenderableComponent}
     */
    setAttribute(key, value) {
        this.attributes[key] = value
        return this
    }

    /**
     * Returns component HTML-attribute by key,
     * 
     * @param {string} key 
     * @returns {string | null}
     */
    getAttribute(key) {
        return this.attributes[key]
    }

    /**
     * Set component event action by key,
     * 
     * @param {string} key 
     * @returns {Action | null}
     */
    setEvent(key, action) {
        this.events[key] = action
        return this
    }

    /**
     * Returns component event action by key,
     * 
     * @param {string} key 
     * @returns {Action | null}
     */
    getEvent(key) {
        return this.events[key]
    }

    /**
     * Create new event for current component
     */
    createEvent(type, actionFunction) {
        if (typeof type === "undefined") return
        if (typeof actionFunction !== "function") return

        const action = new Action()

        action.start = actionFunction

        this.setEvent(type, action)
    }

    /**
     * Set component event action by key,
     * 
     * @param {string} key 
     * @returns {Action | null}
     */
    setPreviewEvent(key, action) {
        this.previewEvents[key] = action
        return this
    }

    /**
     * Returns component event action by key,
     * 
     * @param {string} key 
     * @returns {Action | null}
     */
    getPreviewEvent(key) {
        return this.previewEvents[key]
    }

    /**
     * Create new event for current component.
     * 
     * @param {string} type
     * @param {Function} func
     */
    createPreviewEvent(type, func) {
        if (typeof type === "undefined") return
        if (typeof func !== "function") return

        const action = new Action()

        action.start = func

        this.setPreviewEvent(type, action)
    }

    /**
     * Returns HTML-element for current version of component.
     * 
     * @returns {HTMLElement | null}
     */
    getDomElement() {
        return DOM.getElementByComponentId(this.id)
    }

    /**
     * Returns HTML-element for previous version of component.
     * 
     * @returns {HTMLElement | null}
     */
    getOldDomElement() {
        return DOM.getElementByComponentId(this.oldId)
    }

    /**
     * Throws error if child component doesn't have template() method.
     */
    template() {
        throw new Error("Component doesn't have template() method.")
    }

    /**
     * Returns preview template.
     */
    previewTemplate() {
        return this.template()
    }

    /**
     * Returns HTML-string for current component taking from template() method.
     * 
     * @returns {string} HTML-string
     */
    render() {
        return DOM.getHtmlWithAttributes(this)
    }

    /**
     * Returns HTML-string for current component taking from previewTemplate() method.
     * 
     * @returns {string} HTML-string
     */
    renderPreview() {
        return DOM.getHtmlWithAttributes(this, true)
    }

    /**
     * Make action before refreshing component if exists.
     */
    startBeforeRefreshAction() {
        typeof this.beforeRefresh === "function" && this.beforeRefresh()
        typeof this.beforeRefresh === "object" && this.beforeRefresh.start()
    }

    /**
     * Make action after refreshing component if exists.
     */
    startAfterRefreshAction() {
        typeof this.afterRefresh === "function" && this.afterRefresh()
        typeof this.afterRefresh === "object" && this.afterRefresh.start()
    }

    /**
     * Refresh and rerender component.
     */
    refresh() {
        this.startBeforeRefreshAction()
        this.refreshId()
        this.getOldDomElement().outerHTML = this.render()
        this.startAfterRefreshAction()
    }

    /**
     * Remove all component childs.
     */
    removeAllChilds() {
        this.childs.forEach((child) => child.remove())
        this.childs = []
    }

    /**
     * Remove all component events.
     */
    removeAllEvents() {
        for (let [key, action] of Object.entries(this.events)) {
            action.remove()
        }
        this.events = {}
    }

    /**
     * Remove all component preview events.
     */
    removeAllPreviewEvents() {
        for (let [key, action] of Object.entries(this.previewEvents)) {
            action.remove()
        }
        this.previewEvents = {}
    }

    /**
     * Remove all component actions.
     */
    removeAllActions() {
        this.actions.forEach((action) => action.remove())
        this.actions = []
    }

    /**
     * Remove component DOM element.
     */
    removeDomElement() {
        this.getDomElement()?.remove()
    }

    /**
     * Remove component with childs, actions and DOM element.
     */
    remove() {
        this.removeAllChilds()
        this.removeAllEvents()
        this.removeAllPreviewEvents()
        this.removeAllActions()
        this.removeDomElement()
        super.remove()
    }
}

export default RenderableComponent
