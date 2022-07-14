import Action from "../actions/Action.js";
import ManageField from "./ManageField.js";
import OptionField from "./OptionField.js";

class SelectField extends ManageField {
    constructor({ label = "", optionsData = [] }) {
        super({ label })
        this.optionsData = [{ label }, ...optionsData]
        this._options = []
        this._selectedOptionValue = ""
        this.init()
    }

    init() {
        this.addOptions(this.optionsData)

        const onChangeOption = new Action()
        onChangeOption.start = (e) => {
            this._selectedOptionValue = e.target.value
            this._options.forEach(
                (option) => option.setSelected(option.value === this._selectedOptionValue)
            )
        }

        this.setEvent("onchange", onChangeOption)
    }

    addOption(optionData) {
        this._options.push(new OptionField(optionData))
    }

    addOptions(optionsData = []) {
        optionsData.forEach((optionData) => this.addOption(optionData))
    }

    clearOptions() {
        this._options = []
    }

    refreshOptions(optionsData = []) {
        this.clearOptions()
        this.addOptions([{ 
            label: this.label 
        }, ...optionsData])
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
