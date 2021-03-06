import { DATA_COMPONENT_ID, DATA_ACTION_ID } from "./DOM.js"
import Store from "./Store.js"

/**
 * Listener for global events
 */
class EventListener {
    static getTargetComponent(target) {
        const componentId = target.getAttribute(DATA_COMPONENT_ID)
        if (componentId && Store.components.has(componentId)) {
            return Store.components.get(componentId)
        }
        return null
    }

    static getTargetAction(target) {
        const actionId = target.getAttribute(DATA_ACTION_ID)
        if (actionId && Store.actions.has(actionId)) {
            return Store.actions.get(actionId)
        }
        return null
    }

    static start() {
        window.addEventListener("click", (e) => {
            const component = EventListener.getTargetComponent(e.target)
            const action = EventListener.getTargetAction(e.target)
            
            if (component && component.hasActions()) {
                component.startActions()
            }

            if (action) {
                action.start()
            }
        })
    }
}

export default EventListener
