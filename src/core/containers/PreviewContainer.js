import Container from "../components/Container.js";
import ButtonComponent from "../components/global/ButtonComponent.js";

class PreviewContainer extends Container {
    constructor() {
        super({ storeId: "preview" })
        this._constrols = []
        this._visible = false
        this.initControls()
    }

    initControls() {
        const closeBtn = new ButtonComponent({ text: "Close preview" })
        closeBtn.createEvent("onclick", () => {
            this.hide()
        })

        this._constrols.push(closeBtn)
    }

    show() {
        this._visible = true
        this.refresh()
    }

    hide() {
        this._visible = false
        this.refresh()
    }

    renderControls() {
        return this._constrols.map((control) => control.render());
    }

    template() {
        return `
            <div class="quizio-preview${this._visible ? " show" : ""}">
                <div class="quizio-preview-controls">${this.renderControls()}</div>
                ${this.renderChilds()}
            </div>
        `
    }
}

export default PreviewContainer
