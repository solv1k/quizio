import ManageField from "../fields/ManageField.js";
import RenderableComponent from "./RenderableComponent.js";

/**
 * This component has managable fields for use in Manager section.
 */
class ManagableComponent extends RenderableComponent {
    constructor() {
        super()
    }

    /**
     * Returns array of managable fields for current component.
     * 
     * @returns {array<ManageField>}
     */
    managableFields() {
        return [
            new ManageField({ label: `#`})
        ]
    }
}

export default ManagableComponent
