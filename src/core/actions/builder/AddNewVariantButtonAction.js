import VariantButton from "../../components/work/VariantButton.js";
import Action from "../Action.js";
import SetManageAction from "./SetManageAction.js";

class AddNewVariantButtonAction extends Action {
    constructor(buttonGroup) {
        super()
        this.buttonGroup = buttonGroup
        this.setManageAction = new SetManageAction(buttonGroup.screen)
    }

    start() {
        const buttonGroup = this.buttonGroup

        const deleteAction = new Action()

        deleteAction.start = (button) => {
            buttonGroup.removeChild(button)
            buttonGroup.field.removeField(button.field)
            button.remove()
            this.setManageAction.start()
            deleteAction.remove()
        }

        const button = new VariantButton(buttonGroup.screen, true, deleteAction)

        button.afterRefresh = () => {
            buttonGroup.refreshChild(button)
        }

        buttonGroup.addChild(button)
        buttonGroup.field.addField(button.field)
        buttonGroup.refresh()

        this.setManageAction.start()
    }
}

export default AddNewVariantButtonAction
