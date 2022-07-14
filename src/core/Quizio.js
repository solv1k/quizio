import AppContainer from './containers/AppContainer.js';
import DebugContainer from './containers/DebugContainer.js';
import ManageContainer from './containers/ManageContainer.js';
import NavContainer from './containers/NavContainer.js';
import WorkContainer from './containers/WorkContainer.js';
import EventListener from './EventListener.js';
import Store from './Store.js';
import AddNewScreenAction from './actions/builder/AddNewScreenAction.js';

/**
 * Quizio main class
 */
class Quizio {
    constructor({ containerId = "app", config = {} }) {
        // throw error if app already run
        if (typeof window.Quizio !== "undefined") {
            throw new Error("You can launch just one copy of Quizio constructor.")
        }
        // save app instance in global variable
        window.Quizio = this
        // initialize object fields
        this.containerId = containerId;
        this.config = config;
        // initialize app
        this.init()
    }

    /**
     * Returns action from global storage by key.
     * 
     * @param {string} key 
     * @returns object | null
     */
    getAction(key) {
        return Store.getAction(key)
    }

    /**
     * Save action in global storage.
     * 
     * @param {string} key 
     * @param {Action} action 
     */
    setGlobalAction(key, action) {
        Store.setGlobalAction(key, action)
    }

    /**
     * Setting global actions.
     */
    setGlobalActions() {
        Store.setGlobalAction("AddNewScreen", new AddNewScreenAction())
    }

    /**
     * Initialize application.
     */
    init() {
        // set global actions
        this.setGlobalActions()
        // start global event listener
        EventListener.start()
        // create application container with children containers and render its
        const appContainer = new AppContainer(this.containerId)
        .addChilds([
            new NavContainer(),
            new ManageContainer(),
            new WorkContainer(),
            new DebugContainer()
        ])
        .render()
    }
}

export default Quizio
