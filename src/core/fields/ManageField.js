import RenderableComponent from "../components/RenderableComponent.js"

class ManageField extends RenderableComponent {
    constructor({ label }) {
        super()
        this.label = label
    }

    template() {
        return `<div><!-- MANAGE FIELD --></div>`
    }
}

export default ManageField
