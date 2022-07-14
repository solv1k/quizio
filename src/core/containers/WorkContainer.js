import Helpers from "../../helpers/Helpers.js";
import Action from "../actions/Action.js";
import ActionList from "../actions/ActionList.js";
import ButtonComponent from "../components/global/ButtonComponent.js";
import Container from "../components/Container.js";

class WorkContainer extends Container {
    constructor() {
        super({ storeId: "work" })
        this.setBeforeRefresh(new ActionList())
        this.setAfterRefresh(new ActionList())
        this.init()
    }

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

    addChild(component) {
        super.addChild(component)
        this.refresh()
    }

    removeChild(component) {
        super.removeChild(component)
        this.refresh()
    }

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
