import RenderableComponent from "../RenderableComponent.js";

class ButtonComponent extends RenderableComponent {
    constructor({ text="", action = null }) {
        super()
        this.text = text
        this.action = action
        this.init()
    }

    init() {
        if (this.action) {
            this.addAction(this.action)
        }
    }

    template() {
        return `
            <button class="quizio-button">${this.text}</button>
        `
    }
}

export default ButtonComponent
