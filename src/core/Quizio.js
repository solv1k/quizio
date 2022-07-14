import AppContainer from './containers/AppContainer.js';
import DebugContainer from './containers/DebugContainer.js';
import ManageContainer from './containers/ManageContainer.js';
import NavContainer from './containers/NavContainer.js';
import WorkContainer from './containers/WorkContainer.js';
import EventListener from './EventListener.js';
import Store from './Store.js';

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
     * Initialize application.
     */
    init() {
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
