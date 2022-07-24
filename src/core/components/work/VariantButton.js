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
        this.variantText = "Variant"
        this.init()
    }

    getScreenOptions() {
        // get all active screens from work container
        // exclude current screen
        // and map all data to array
        // for dropdown select
        const screenOptionsData = Store.getContainer("work")?.childs
        .filter((screen) => this.screen.id !== screen.id)
        .map((screen) => {
            return {
                label: screen.id,
                value: screen.id
            }
        })

        // add "New screen" button
        // as last option in dropdown select
        screenOptionsData.push({
            label: "Add new screen",
            onSelect: Store.getGlobalAction("AddNewScreen")
        })

        return screenOptionsData
    }

    /**
     * Initialize Variant Button.
     */
    init() {
        const setManageAction = new SetManageAction(this.screen)
        this.addAction(setManageAction)

        const selectScreenField = new SelectField({
            label: "Select screen...",
            options: this.getScreenOptions()
        })

        Store.getContainer("work").afterRefresh.addAction(() => {
            selectScreenField.refreshOptions(this.getScreenOptions())
            setManageAction.start()
        })

        const groupFields = [
            new TextField({ 
                label: "Button text", 
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
                this.screen.refresh()
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

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <input type="button" class="quizio-variant-button" value="${this.variantText}" />
        `
    }
}

export default VariantButton
