import Container from "../components/Container.js";
import NavItem from '../components/nav/NavItem.js';
import AddNewScreenAction from '../actions/builder/AddNewScreenAction.js';

/**
 * Naviation component
 */
class NavContainer extends Container {
    constructor() {
        super({ storeId: "nav" })
        this.init()
    }

    init() {
        this.addChild(
            new NavItem({
                title: "Add new Screen",
                action: new AddNewScreenAction()
            })
        )
    }

    template() {
        return `
            <div class="quizio-nav">
                ${this.renderChilds()}
            </div>
        `
    }
}

export default NavContainer
