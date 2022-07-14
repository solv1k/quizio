import Store from '../../Store.js';
import Action from '../Action.js';
import Screen from '../../components/work/Screen.js';

/**
 * Add New Screen action
 */
class AddNewScreenAction extends Action {
    constructor() {
        super()
    }
    
    start() {
        Store.containers.get("work")?.addChild(new Screen())
    }
}

export default AddNewScreenAction
