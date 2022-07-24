import RenderableComponent from "./components/RenderableComponent.js"
import { DOM } from "./DOM.js"

class FieldBuilder extends RenderableComponent {
    constructor(manageContainer) {
        super()
        this.manageContainer = manageContainer
    }

    renderFields() {
        return this.manageContainer
                    .managableComponent
                    .managableFields()
                    .map((field) => DOM.getHtmlWithAttributes(field))
                    .join("")
    }

    render() {
        return this.renderFields()
    }
}

export default FieldBuilder
