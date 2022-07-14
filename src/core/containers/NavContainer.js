import Container from "../components/Container.js";
import NavItem from '../components/nav/NavItem.js';
import AddNewScreenAction from '../actions/builder/AddNewScreenAction.js';

/**
 * Naviation container (at the top of the app screen).
 */
class NavContainer extends Container {
    constructor() {
        super({ storeId: "nav" })
        this.init()
    }

    /**
     * Initialize Navigation Container.
     */
    init() {
        this.addChild(
            new NavItem({
                title: "Add new Screen",
                action: new AddNewScreenAction()
            })
        )
    }

    /**
     * HTML-template for this component.
     * 
     * @returns {string} HTML-template
     */
    template() {
        return `
            <div class="quizio-nav">
                ${this.renderChilds()}
            </div>
        `
    }
}

export default NavContainer
