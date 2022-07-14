import Store from '../Store.js';
import UUID from '../../helpers/UUID.js';

/**
 * Basic component class.
 */
class Component {
    constructor() {
        this.createId()
    }

    /**
     * Generate unique ID for current component and save it in global storage.
     */
    createId() {
        this.id = UUID.generate()
        Store.components.set(this.id, this)
    }

    /**
     * Save previous ID for current component and remove it from global storage.
     */
    removeId() {
        this.oldId = this.id
        Store.components.delete(this.id)
    }

    /**
     * Refresh ID (remove, then create) for current component.
     */
    refreshId() {
        this.removeId()
        this.createId()
    }

    /**
     * Returns old (previous) component ID.
     * 
     * @returns {string | null}
     */
    getOldId() {
        return this.oldId || null
    }

    /**
     * Remove component from global storage.
     */
    remove() {
        Store.components.delete(this.id)
    }
}

export default Component
