import Store from "./Store.js"

class Previewer {
    constructor(quizComponents = []) {
        this.quizComponents = quizComponents
        this._visible = false
        this._activeScreen = null
        this.init()
    }

    getPreviewContainer() {
        // get container for rendering quizio preview
        const previewContainer = Store.getContainer("preview")
        // throws if preview container not found
        if (! previewContainer)
            throw new Error("Preview container not found.")

        return previewContainer
    }

    init() {
        // get container for rendering quizio preview
        const previewContainer = this.getPreviewContainer()
        // set previewer to components
        this.quizComponents.forEach((component) => {
            component.setPreviewer(this)
        })
    }

    show() {
        this._visible = true
        this.refresh()
    }

    hide() {
        this._visible = false
        this.refresh()
    }

    renderActiveScreenToPreviewContainer() {
        // get container for rendering quizio preview
        const previewContainer = this.getPreviewContainer()
        // clear old quiz components (not remove!)
        previewContainer.clearChilds()
        // get active screen
        const activeScreen = this.getActiveScreen()
        // add active screen to preview container
        previewContainer.addChild(activeScreen)
        // show preview container
        previewContainer.show() 
    }

    hidePreviewContrainer() {
        // get container for rendering quizio preview
        const previewContainer = this.getPreviewContainer()
        // clear active screen
        this._activeScreen = null
        // hide preview container
        previewContainer.hide()
    }

    getActiveScreen() {
        if (this._activeScreen)
            return this._activeScreen
        else
            return this.quizComponents[0]
    }

    setActiveScreen(screen) {
        this._activeScreen = screen
        this.refresh()
    }

    refresh() {
        if (this._visible)
            this.renderActiveScreenToPreviewContainer()
        else
            this.hidePreviewContrainer()
    }
}

export default Previewer
