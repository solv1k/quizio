import AddNewVariantButtonAction from "../../actions/builder/AddNewVariantButtonAction.js";
import ButtonField from "../../fields/ButtonField.js";
import GroupField from "../../fields/GroupField.js";
import ScreenChildComponent from "../ScreenChildComponent.js";

class VariantButtonGroup extends ScreenChildComponent {
    constructor(screen) {
        super(screen)
        this.screen = screen
        this.init()
    }

    init() {
        this.field = new GroupField({
            fields: [
                new ButtonField({
                    label: "+ Add variant button",
                    action: new AddNewVariantButtonAction(this)
                })
            ]
        })
    }

    template() {
        return `
            <div class="quizio-variant-button-group">
                ${this.renderChilds()}
            </div>
        `
    }
}

export default VariantButtonGroup
