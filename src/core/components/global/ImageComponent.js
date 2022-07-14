import RenderableComponent from "../RenderableComponent.js";

/**
 * Simple image.
 */
class ImageComponent extends RenderableComponent {
    constructor() {
        super()
    }

    template() {
        return `
            <div class="quizio-image" style="background-image: url(images/placeholder.webp)"></div>
        `
    }
}

export default ImageComponent
