import SetManageAction from "../../actions/builder/SetManageAction.js";
import UploadField from "../../fields/UploadField.js";
import ImageComponent from "../global/ImageComponent.js";
import ScreenChildComponent from "../ScreenChildComponent.js";

class ScreenImage extends ScreenChildComponent {
    constructor(screen) {
        super(screen)
        this.init()
    }

    init() {
        const image = new ImageComponent()
        image.addAction(new SetManageAction(this.screen))

        this.addChilds([
            image
        ])

        this.field = new UploadField({
            label: "Select image...",
            target: {
                component: image,
                attribute: "style",
                pattern: "background-image: url($)"
            }
        })
    }

    template() {
        return `
            <div class="quizio-image-container">
                ${this.renderChilds()}
            </div>
        `
    }
}

export default ScreenImage
