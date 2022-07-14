import ManageField from "./ManageField.js";

class OptionField extends ManageField {
    constructor({ label, value = "", onSelect = null }) {
        super({ label })
        this.value = value
        this.onSelect = onSelect
        this._selected = false
    }

    setSelected(selected) {
        // set "selected" attribute
        this._selected = selected
        // when option is selected start "onSelect" event
        if (selected) {
            typeof this.onSelect === "function" && this.onSelect()
            typeof this.onSelect === "object" && this.onSelect?.start()
        }
    }

    template() {
        return `
            <option value="${this.value}"${this._selected ? " selected=\"selected\"" : ""}>${this.label}</option>
        `
    }
}

export default OptionField
