import Action from "../actions/Action.js";
import ManageField from "./ManageField.js";
import OptionField from "./OptionField.js";

class SelectField extends ManageField {
    constructor({ label = "", options = [], onSelect = null }) {
        super({ label })
        this.options = [{ label }, ...options]
        this._options = []
        this._selectedOptionValue = ""
        this.onSelect = onSelect
        this.init()
    }

    init() {
        this.addOptions(this.options)

        const onChangeOption = new Action()
        onChangeOption.start = (e) => {
            this._selectedOptionValue = e.target.value
            this._options.forEach(
                (option) => option.setSelected(option.value === this._selectedOptionValue)
            )
            if (typeof this.onSelect === "function")
                this.onSelect(this._selectedOptionValue)
        }

        this.setEvent("onchange", onChangeOption)
    }

    addOption(option) {
        const optionField = new OptionField(option)

        if (this._selectedOptionValue === option.value) {
            optionField.setSelected(true)
        }

        this._options.push(optionField)
    }

    addOptions(options = []) {
        options.forEach((option) => this.addOption(option))
    }

    clearOptions() {
        this._options.forEach((option) => option.remove())
        this._options = []
    }

    refreshOptions(options = []) {
        this.clearOptions()
        this.addOptions([{ 
            label: this.label 
        }, ...options])
    }

    renderOptions() {
        return this._options.map((option) => option.render()).join("")
    }

    template() {
        return `
            <select>
                ${this.renderOptions()}
            </select>
        `
    }
}

export default SelectField
