import Helpers from "../../helpers/Helpers.js";
import Action from "../actions/Action.js";
import ActionList from "../actions/ActionList.js";
import ButtonComponent from "../components/global/ButtonComponent.js";
import Container from "../components/Container.js";

/**
 * Work container (contains all screens created in Quizio app).
 */
class WorkContainer extends Container {
    constructor() {
        super({ storeId: "work" })
        this.setBeforeRefresh(new ActionList())
        this.setAfterRefresh(new ActionList())
        this.init()
    }

    /**
     * Initialize Work Container.
     */
    init() {
        const saveQuizAction = new Action()
        saveQuizAction.start = () => {
            console.log(JSON.stringify(this, Helpers.circularReplacer()))
        }

        this.saveButton = new ButtonComponent({
            text: "Save QUIZ",
            action: saveQuizAction
        })
    }

    /**
     * Add child component, then refresh current container.
     * 
     * @param {RenderableComponent} component 
     */
    addChild(component) {
        super.addChild(component)
        this.refresh()
    }

    /**
     * Remove child component, then refresh current container.
     * 
     * @param {RenderableComponent} component 
     */
    removeChild(component) {
        super.removeChild(component)
        this.refresh()
    }

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <div class="quizio-work-container">
                <div class="inner">
                    ${this.renderChilds()}
                    ${this.hasChilds() ? this.saveButton.render() : ""}
                </div>
            </div>
        `
    }
}

export default WorkContainer
