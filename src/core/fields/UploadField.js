import Action from "../actions/Action.js";
import ManageField from "./ManageField.js";

class UploadField extends ManageField {
    constructor({ label, target }) {
        super({ label })
        this.target = target
        this.init()
    }

    init() {
        const changeAction = new Action()
        changeAction.start = () => {
            const reader = new FileReader();
            reader.readAsDataURL(this.getDomElement().files[0]);
            reader.onload = () => {
                const image = this.target.component
                image.setAttribute(
                    this.target.attribute, 
                    this.target.pattern 
                    ? this.target.pattern.replace("$", reader.result) 
                    : reader.result
                )
                image.refresh()
            }
        }

        this.setEvent("onchange", changeAction)
    }

    template() {
        return `
            <input type="file" placeholder="${this.label}" />
        `
    }
}

export default UploadField
