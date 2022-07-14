import ManagableComponent from "./ManagableComponent.js";

class ScreenChildComponent extends ManagableComponent {
    constructor(screen) {
        super()
        this.screen = screen
    }

    remove() {
        this.field?.remove()
        super.remove()
    }
}

export default ScreenChildComponent
