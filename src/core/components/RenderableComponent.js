import { DOM } from "../DOM.js"
import Component from "./Component.js"

/**
 * Component has render method
 */
class RenderableComponent extends Component {
    constructor() {
        super()
        this.attributes = {}
        this.events = {}
        this.childs = []
        this.actions = []
    }

    setBeforeRefresh(beforeRefresh) {
        this.beforeRefresh = beforeRefresh
        return this
    }

    setAfterRefresh(afterRefresh) {
        this.afterRefresh = afterRefresh
        return this
    }

    addChild(child) {
        this.childs.push(child)
        return this
    }

    addChilds(childs = []) {
        childs.forEach((child) => this.addChild(child))
        return this
    }

    getChild(id) {
        return this.childs.find((child) => child.id === id)
    }

    removeChild(child) {
        this.childs = this.childs.filter((c) => c.id !== child.id)
        return this
    }

    refreshChild(child) {
        this.childs = this.childs.filter((c) => c.id !== child.getOldId())
        this.addChild(child)
        return this
    }

    renderChilds() {
        return this.childs.map((child) => child.render()).join("")
    }

    hasChilds() {
        return this.childs.length > 0
    }

    addAction(action) {
        this.actions.push(action)
        return this
    }

    addActions(actions = []) {
        actions.forEach((action) => this.addAction(action))
        return this
    }

    getAction(id) {
        return this.actions.find((action) => action.id === id)
    }

    hasActions() {
        return this.actions.length > 0
    }

    startActions() {
        this.actions.forEach((action) => action.start())
    }

    setAttribute(key, value) {
        this.attributes[key] = value
        return this
    }

    getAttribute(key) {
        return this.attributes[key]
    }

    setEvent(key, action) {
        this.events[key] = action
        return this
    }

    getEvent(key) {
        return this.events[key]
    }

    getDomElement() {
        return DOM.getElementByComponentId(this.id)
    }

    getOldDomElement() {
        return DOM.getElementByComponentId(this.oldId)
    }

    template() {
        throw new Error("Component doesn't have template() method.")
    }

    render() {
        return DOM.getHtmlWithAttributes(this)
    }

    startBeforeRefreshAction() {
        typeof this.beforeRefresh === "function" && this.beforeRefresh()
        typeof this.beforeRefresh === "object" && this.beforeRefresh.start()
    }

    startAfterRefreshAction() {
        typeof this.afterRefresh === "function" && this.afterRefresh()
        typeof this.afterRefresh === "object" && this.afterRefresh.start()
    }

    refresh() {
        this.startBeforeRefreshAction()
        this.refreshId()
        this.getOldDomElement().outerHTML = this.render()
        this.startAfterRefreshAction()
    }

    removeAllChilds() {
        this.childs.forEach((child) => child.remove())
    }

    removeAllActions() {
        this.actions.forEach((action) => action.remove())
    }

    removeDomElement() {
        this.getDomElement()?.remove()
    }

    remove() {
        this.removeAllChilds()
        this.removeAllActions()
        this.removeDomElement()
        super.remove()
    }
}

export default RenderableComponent
