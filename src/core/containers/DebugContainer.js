import Container from "../components/Container.js";

/**
 * Debug container (can be used for app debugging).
 */
class DebugContainer extends Container {
    constructor() {
        super({ storeId: "debug" })
        this.lines = []
    }

    /**
     * Print debug message.
     * 
     * @param {string} text 
     */
    printLine(text) {
        this.lines.push(text)
        this.refresh()
    }

    /**
     * Returns HTML-string for all debug lines.
     * 
     * @returns {string}
     */
    renderLines() {
        return this.lines.map((line) => `<div class="line">${line}</div>`).join("")
    }

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <div class="quizio-debug-bar">
                <div class="inner">
                    <small>debug bar > _</small>
                    ${this.renderLines()}
                </div>
            </div>
        `
    }
}

export default DebugContainer