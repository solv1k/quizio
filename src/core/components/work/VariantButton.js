import TextField from "../../fields/TextField.js";
import ScreenChildComponent from "../ScreenChildComponent.js";
import GroupField from '../../fields/GroupField.js';
import SetManageAction from "../../actions/builder/SetManageAction.js";
import ButtonField from "../../fields/ButtonField.js";
import Action from "../../actions/Action.js";
import SelectField from "../../fields/SelectField.js";
import Store from "../../Store.js";

class VariantButton extends ScreenChildComponent {
    constructor(screen, withDeleteButton = false, deleteAction) {
        super(screen)
        this.withDeleteButton = withDeleteButton
        this.deleteAction = deleteAction
        this.screen = screen
        this.variantText = "Вариант"
        this.init()
    }

    getOptionsData() {
        const screensOptionsData = Store.getContainer("work")?.childs
        .filter((screen) => this.screen.id !== screen.id)
        .map((screen, index) => {
            return {
                label: `Экран ${index + 1}`,
                value: screen.id
            }
        })

        return screensOptionsData
    }

    init() {
        const setManageAction = new SetManageAction(this.screen)
        this.addAction(setManageAction)

        const selectScreenField = new SelectField({
            label: "Выберите экран...",
            optionsData: this.getOptionsData()
        })

        Store.getContainer("work").afterRefresh.addAction(() => {
            selectScreenField.refreshOptions(this.getOptionsData())
            setManageAction.start()
        })

        const groupFields = [
            new TextField({ 
                label: "Текст кнопки", 
                value: this.variantText,
                autosaveOnChange: true,
                target: {
                    component: this,
                    attribute: "value"
                }
            }),
            selectScreenField
        ]

        if (this.withDeleteButton) {
            const deleteAction = new Action()
            deleteAction.start = () => {
                this.deleteAction.start(this)
                deleteAction.remove()
            }

            groupFields.push(
                new ButtonField({ 
                    label: "X", 
                    action: deleteAction
                })
            )
        }

        this.field = new GroupField({
            fields: groupFields,
            className: "d-flex"
        })
    }

    template() {
        return `
            <input type="button" class="quizio-variant-button" value="${this.variantText}" />
        `
    }
}

export default VariantButton
