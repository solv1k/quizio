import ManagableComponent from "./ManagableComponent.js";

/**
 * This component use for rendering screen child component.
 */
class ScreenChildComponent extends ManagableComponent {
    constructor(screen) {
        super()
        this.screen = screen
        this.field = null
    }

    remove() {
        this.field?.remove()
        super.remove()
    }
}

export default ScreenChildComponent
