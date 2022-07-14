import { DATA_ACTION_ID } from "../DOM.js";
import ManageField from "./ManageField.js";

class ButtonField extends ManageField {
    constructor({ label, action }) {
        super({ label })
        this.action = action
    }

    template() {
        return `
            <input type="button" ${DATA_ACTION_ID}="${this.action.id}" value="${this.label}" />
        `
    }
}

export default ButtonField
