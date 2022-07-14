import RenderableComponent from '../RenderableComponent.js';

/**
 * Navigation item.
 */
class NavItem extends RenderableComponent {
    constructor({ title, action }) {
        super()
        this.title = title
        this.addAction(action)
    }

    template() {
        return `
            <div class="quizio-nav-item">
                ${this.title}
            </div>
        `
    }
}

export default NavItem
