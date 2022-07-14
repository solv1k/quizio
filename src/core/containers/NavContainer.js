import Container from "../components/Container.js";
import NavItem from '../components/nav/NavItem.js';
import AddNewScreenAction from '../actions/builder/AddNewScreenAction.js';

/**
 * Naviation component
 */
class NavContainer extends Container {
    constructor() {
        super({ storeId: "nav" })
        this.items = [
            new NavItem({
                title: "Add new Screen",
                action: new AddNewScreenAction()
            })
        ]
    }

    renderItems() {
        return this.items.map((item) => item.render()).join("")
    }

    template() {
        return `
            <div class="quizio-nav">
                ${this.renderItems()}
            </div>
        `
    }
}

export default NavContainer
