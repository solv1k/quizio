import RenderableComponent from "../components/RenderableComponent.js"
import { DOM } from "../DOM.js"

class GroupField extends RenderableComponent {
    constructor({fields = [], className = ""}) {
        super()
        this.fields = fields
        this.className = className
    }

    addField(field) {
        this.fields.push(field)
        this.render()
    }

    removeField(field) {
        this.fields.find((f) => f.id === field.id)?.remove()
        this.fields = this.fields.filter((f) => f.id !== field.id)
    }

    renderFields() {
        return this.fields.map((field) => field.render()).join("")
    }

    remove() {
        this.fields.forEach((child) => child.remove())
        super.remove()
    }

    getClassName() {
        const classNames = ["quizio-group-field"]

        if (this.className) {
            classNames.push(...DOM.extractClassList(this.className))
        }

        return classNames.join(" ")
    }

    template() {
        return `
            <div class="${this.getClassName()}">
                ${this.renderFields()}
            </div>
        `
    }
}

export default GroupField
