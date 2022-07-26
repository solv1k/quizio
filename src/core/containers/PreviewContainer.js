import Container from "../components/Container.js";
import ButtonComponent from "../components/global/ButtonComponent.js";

class PreviewContainer extends Container {
    constructor() {
        super({ storeId: "preview" })
        this._constrols = []
        this._visible = false
        this.initNavControls()
    }

    initNavControls() {
        const closeBtn = new ButtonComponent({ text: "Close preview" })
        closeBtn.createEvent("onclick", () => {
            this.hide()
        })

        this._constrols.push(closeBtn)
    }

    clearChilds() {
        this.childs = []
    }

    show() {
        this.getDomElement().innerHTML = this.innerTemplate()
        this.getDomElement().classList.add('show')
    }

    hide() {
        this.getDomElement().classList.remove('show')
    }

    renderControls() {
        return this._constrols.map((control) => control.render());
    }

    renderPreviews() {
        return this.childs.map((child) => child.renderPreview());
    }

    innerTemplate() {
        return `
            <div class="quizio-preview-controls">${this.renderControls()}</div>
            <div class="quizio-preview-screens">${this.renderPreviews()}</div>
        `
    }

    template() {
        return `
            <div class="quizio-preview${this._visible ? " show" : ""}">
                ${this.innerTemplate()}
            </div>
        `
    }
}

export default PreviewContainer
