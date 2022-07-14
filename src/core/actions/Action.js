import UUID from "../../helpers/UUID.js"
import Store from "../Store.js"

class Action {
    constructor() {
        this.createId()
    }

    createId() {
        this.id = UUID.generate()
        Store.actions.set(this.id, this)
    }

    start() {
        throw new Error("This action without start() method.")
    }

    remove() {
        Store.actions.delete(this.id)
    }
}

export default Action
