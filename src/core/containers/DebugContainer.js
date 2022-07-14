import Container from "../components/Container.js";

class DebugContainer extends Container {
    constructor() {
        super({ storeId: "debug" })
        this.lines = []
    }

    printLn(text) {
        this.lines.push(text)
        this.refresh()
    }

    renderLines() {
        return this.lines.map((line) => `<div class="line">${line}</div>`).join("")
    }

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