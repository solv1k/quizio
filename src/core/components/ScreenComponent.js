import ManagableComponent from "./ManagableComponent.js";

class ScreenComponent extends ManagableComponent {
    constructor() {
        super()
    }

    managableFields() {
        return this.childs.map((child) => child.field)
    }
}

export default ScreenComponent
