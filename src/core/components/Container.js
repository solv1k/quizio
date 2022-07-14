import Store from "../Store.js";
import RenderableComponent from "./RenderableComponent.js";

/**
 * This component use for containering other components.
 */
class Container extends RenderableComponent {
    constructor({ storeId }) {
        super()
        this.storeId = storeId
        this.putInStore()
    }

    putInStore() {
        if (!this.storeId) {
            throw new Error("Can't save component in store without ID.")
        }

        Store.containers.set(this.storeId, this)
    }
}

export default Container
