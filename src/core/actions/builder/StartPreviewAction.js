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

        if (quizComponents.length === 0) {
            alert("Work container is empty. Add a new Screen first.")
            return
        }

        const previewer = new Previewer(quizComponents)
        previewer.show()
    }
}

export default StartPreviewAction
