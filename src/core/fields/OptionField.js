import ManageField from "./ManageField.js";

class OptionField extends ManageField {
    constructor({ label, value = "" }) {
        super({ label })
        this.value = value
        this.selected = false
    }

    setSelected(selected) {
        this.selected = selected
    }

    template() {
        return `
            <option value="${this.value}"${this.selected ? " selected=\"selected\"" : ""}>${this.label}</option>
        `
    }
}

export default OptionField
