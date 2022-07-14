import RenderableComponent from "../RenderableComponent.js";
import ScreenImage from "./ScreenImage.js";
import VariantButtonGroup from "./VariantButtonGroup.js";

/**
 * Quizio screen.
 */
class Screen extends RenderableComponent {
    constructor() {
        super()
        // initalize screen
        this.init()
    }

    /**
     * Initialize screen.
     */
    init() {
        this.addChilds([
            new ScreenImage(this),
            new VariantButtonGroup(this)
        ])
    }

    /**
     * Returns array of managable fields after recursive mapping.
     * 
     * @returns {array<ManageField>} Array of managable fields
     */
    managableFields() {
        return this.childs.map((child) => child.field)
    }

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <div class="quizio-screen" data-quizio-id="${this.id}">
                ${this.renderChilds()}
            </div>
        `
    }
}

export default Screen
