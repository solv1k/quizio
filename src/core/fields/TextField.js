import Action from "../actions/Action.js";
import ButtonField from "./ButtonField.js";
import ManageField from "./ManageField.js";

class TextField extends ManageField {
    constructor({ label, value = "", target, autosaveOnChange = false }) {
        super({
            label,
            type: "text"
        })
        this.value = value
        this.target = target
        this.autosaveOnChange = autosaveOnChange
        this.bindSaveAction()
    }

    bindSaveAction() {
        const saveAction = new Action()
        saveAction.start = () => {
            if (this.value === this.getInputValue()) return

            this.value = this.getInputValue()

            this.target
            .component
            .setAttribute(this.target.attribute, this.value)
            .refresh()
        }

        this.addAction(saveAction);

        if (this.autosaveOnChange) {
            this.setEvent("onkeyup", saveAction)
        } else {
            this.addChild(new ButtonField({
                label: "Сохранить",
                action: saveAction
            }))
        }
    }

    getInputValue() {
        return this.getDomElement()?.querySelector("input").value
    }

    template() {
        return `
            <div class="quizio-manage-field-text">
                <input type="text" placeholder="${this.label}" value="${this.value}" />
                ${this.renderChilds()}
            </div>
        `
    }
}

export default TextField
