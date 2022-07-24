import Store from "./Store.js"

class Previewer {
    constructor(quizComponents = []) {
        this.quizComponents = quizComponents
        this._visible = false
    }

    show() {
        this._visible = true
        this.refresh()
    }

    hide() {
        this._visible = false
        this.refresh()
    }

    getPreviewContainer() {
        // get container for rendering quizio preview
        const previewContainer = Store.getContainer("preview")
        // throws if preview container not found
        if (! previewContainer)
            throw new Error("Preview container not found.")

        return previewContainer
    }

    renderQuizToPreviewContainer() {
        // get container for rendering quizio preview
        const previewContainer = this.getPreviewContainer()
        // clear old quiz components (not remove!)
        previewContainer.clearChilds()
        // parse quiz data
        this.quizComponents.forEach((component) => {
            previewContainer.addChild(component)
        })
        // show preview contianer
        previewContainer.show()
    }

    hidePreviewContrainer() {
        // get container for rendering quizio preview
        const previewContainer = this.getPreviewContainer()
        // hide preview container
        previewContainer.hide()
    }

    refresh() {
        if (this._visible)
            this.renderQuizToPreviewContainer()
        else
            this.hidePreviewContrainer()
    }
}

export default Previewer
