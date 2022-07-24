import Previewer from "../../Previewer.js";
import Store from "../../Store.js";
import Action from "../Action.js";

class StartPreviewAction extends Action {
    constructor() {
        super()
    }

    start() {
        // "preview quiz" action
        const quizComponents = Store.getContainer("work").childs
        const previewer = new Previewer(quizComponents)
        previewer.show()
    }
}

export default StartPreviewAction
