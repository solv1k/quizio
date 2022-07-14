import ScreenComponent from "../ScreenComponent.js";
import ScreenImage from "./ScreenImage.js";
import VariantButtonGroup from "./VariantButtonGroup.js";

class Screen extends ScreenComponent {
    constructor() {
        super()
        this.init()
    }

    init() {
        this.addChilds([
            new ScreenImage(this),
            new VariantButtonGroup(this)
        ])
    }

    template() {
        return `
            <div class="quizio-screen" data-quizio-id="${this.id}">
                ${this.renderChilds()}
            </div>
        `
    }
}

export default Screen
