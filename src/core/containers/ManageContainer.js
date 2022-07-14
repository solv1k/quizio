import Container from "../components/Container.js";
import FieldBuilder from "../FieldBuilder.js";

/**
 * Manage container (for managing Quizio screens).
 */
class ManageContainer extends Container {
    constructor() {
        super({ storeId: "manager" })
        this.managableComponent = null
        this.builder = new FieldBuilder(this);
    }

    setManagableComponent(managableComponent) {
        this.managableComponent = managableComponent
        this.refresh()
    }

    renderManagableComponent() {
        if (!this.managableComponent) return ""
        return this.builder.render()
    }

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <div class="quizio-manage-container">
                <div class="inner">
                    ${this.renderManagableComponent()}
                </div>
            </div>
        `
    }
}

export default ManageContainer
