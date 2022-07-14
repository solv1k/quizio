import ManageField from "../fields/ManageField.js";
import RenderableComponent from "./RenderableComponent.js";

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
