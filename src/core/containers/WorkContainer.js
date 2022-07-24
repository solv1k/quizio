import Helpers from "../../helpers/Helpers.js";
import Action from "../actions/Action.js";
import ActionList from "../actions/ActionList.js";
import ButtonComponent from "../components/global/ButtonComponent.js";
import Container from "../components/Container.js";
import Previewer from '../Previewer.js';

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
        // "save quiz" action
        const saveQuizAction = new Action()
        saveQuizAction.start = () => {
            const quizData = JSON.stringify(this.childs, Helpers.circularReplacer())
            console.log(quizData)
        }
        // "save quiz" button
        this._saveButton = new ButtonComponent({
            text: "Save QUIZ",
            action: saveQuizAction
        })
        // "preview quiz" action
        const previewQuizAction = new Action()
        previewQuizAction.start = () => {
            const quizComponents = this.childs
            const previewer = new Previewer(quizComponents)
            previewer.show()
        }
        // "preview quiz" button
        this._previewButton = new ButtonComponent({
            text: "Preview QUIZ",
            action: previewQuizAction
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
                    ${this.hasChilds() ? this._saveButton.render() : ""}
                    ${this.hasChilds() ? this._previewButton.render() : ""}
                </div>
            </div>
        `
    }
}

export default WorkContainer
