import Store from '../Store.js';
import UUID from '../../helpers/UUID.js';

/**
 * Basic component class.
 */
class Component {
    constructor() {
        this.createId()
    }

    createId() {
        this.id = UUID.generate()
        Store.components.set(this.id, this)
    }

    removeId() {
        this.oldId = this.id
        Store.components.delete(this.id)
    }

    refreshId() {
        this.removeId()
        this.createId()
    }

    getOldId() {
        return this.oldId || null
    }

    remove() {
        Store.components.delete(this.id)
    }
}

export default Component
