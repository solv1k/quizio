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
        window.Quizio = this
        this.containerId = containerId;
        this.config = config;
        this.init()
    }

    action(key) {
        return Store.actions.get(key)
    }

    component(key) {
        return Store.components.get(key)
    }

    init() {
        const eventListener = new EventListener()

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
