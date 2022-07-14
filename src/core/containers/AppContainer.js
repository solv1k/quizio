import Container from '../components/Container.js';

class AppContainer extends Container {
    constructor(appId = "app") {
        super({ storeId: "app" })
        this.appId = appId
    }

    template() {
        return `
            <div class="quizio-app-container">
                ${this.renderChilds()}
            </div>
        `
    }

    render() {
        const element = document.getElementById(this.appId)

        if (!element) {
            throw new Error("HTML element for building Quizio app was not found by id.")
        }

        element.innerHTML = super.render()
    }
}

export default AppContainer
