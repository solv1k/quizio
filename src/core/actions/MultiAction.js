import Action from "./Action.js";

class MultiAction extends Action {
    constructor() {
        super()
        this.actions = []
    }

    addAction(action) {
        this.actions.push(action)
    }

    addActions(actions = []) {
        actions.forEach((action) => this.addAction(action))
    }

    start() {
        this.actions.forEach((action) => {
            typeof action === "function" && action()
            typeof action === "object" && action.start()
        })
    }
}

export default MultiAction
