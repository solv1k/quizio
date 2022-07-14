import ManageField from "../fields/ManageField.js";
import RenderableComponent from "./RenderableComponent.js";

/**
 * This component has managable fields for use in Manager section.
 */
class ManagableComponent extends RenderableComponent {
    constructor() {
        super()
    }

    managableFields() {
        return [
            new ManageField({ label: `#`})
        ]
    }
}

export default ManagableComponent
