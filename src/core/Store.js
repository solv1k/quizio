/**
 * Store
 */
const Store = {
    // application containers for rendering DOM elements
    containers: new Map(),
    // all components from current application instance
    components: new Map(),
    // all actions from current application instance
    actions: new Map(),
    
    /**
     * Return container by key.
     * 
     * @param {string} key 
     * @returns {Container | null} Container | null
     */
    getContainer: (key) => {
        return Store.containers.get(key) || null
    },

    /**
     * Return component by key.
     * 
     * @param {string} key 
     * @returns {Component | null} Component | null
     */
    getComponent: (key) => {
        return Store.components.get(key) || null
    },

    /**
     * Return action by key.
     * 
     * @param {string} key 
     * @returns {Action | null} Action | null
     */
    getAction: (key) => {
        return Store.actions.get(key) || null
    },

    /**
     * Return global action by key.
     * 
     * @param {string} key 
     * @returns {Action | null} Action | null
     */
    getGlobalAction: (key) => {
        return Store.getAction(`global_${key}`)
    },

    /**
     * Save global sction.
     * 
     * @param {string} key 
     * @param {Action} action 
     */
    setGlobalAction: (key, action) => {
        Store.actions.set(`global_${key}`, action)
    }
}

window.Store = Store

export default Store;
