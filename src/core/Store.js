/**
 * Store
 */
const Store = {
    containers: new Map(),
    components: new Map(),
    actions: new Map(),
    getContainer: (key) => {
        return Store.containers.get(key) || null
    }
}

window.Store = Store

export default Store;
