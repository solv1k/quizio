import Store from "../../Store.js";
import Action from "../Action.js";

class SetManageAction extends Action {
    constructor(managableComponent) {
        super()
        this.managableComponent = managableComponent
    }

    start() {
        Store.getContainer("manager")?.setManagableComponent(this.managableComponent)
    }
}

export default SetManageAction
