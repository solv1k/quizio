import ManageField from "./ManageField.js";

class LabelField extends ManageField {
    constructor({ label }) {
        super({ label })
    }

    template() {
        return `
            <div class="quizio-manage-field-label">
                ${this.label}
            </div>
        `
    }
}

export default LabelField
