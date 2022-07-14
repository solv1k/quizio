import Helpers from "../../helpers/Helpers.js";
import Action from "../actions/Action.js";
import MultiAction from "../actions/MultiAction.js";
import ButtonComponent from "../components/global/ButtonComponent.js";
import Container from "../components/Container.js";

class WorkContainer extends Container {
    constructor() {
        super({ storeId: "work" })
        this.setBeforeRefresh(new MultiAction())
        this.setAfterRefresh(new MultiAction())
        this.init()
    }

    init() {
        const saveQuizAction = new Action()
        saveQuizAction.start = () => {
            console.log(JSON.stringify(this, Helpers.circularReplacer()))
        }

        this.saveButton = new ButtonComponent({
            text: "Сохранить QUIZ",
            action: saveQuizAction
        })
    }

    append(component) {
        this.addChild(component)
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
