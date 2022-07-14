import Action from "../../actions/Action.js";
import ButtonField from "../../fields/ButtonField.js";
import ScreenChildComponent from "../ScreenChildComponent.js";

class ScreenRemover extends ScreenChildComponent {
    constructor(screen) {
        super(screen)
        this.screen = screen
        this.init()
    }

    init() {
        const removeScreenAction = new Action()
        removeScreenAction.start = () => {
            this.screen.remove()
        }

        this.removeScreenAction = removeScreenAction

        this.field = new ButtonField({
            label: "Remove this screen",
            action: this.removeScreenAction
        })
    }

    template() {
        return `
            <div class="quizio-screen-remover"></div>
        `
    }
}

export default ScreenRemover
