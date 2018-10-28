/**
 * The actions namespace.
 * @namespace Components.Actions
 */

/**
 * Class representing a component responsible of every TDLAction preformed.
 * @extends TDLComponent
 * @memberof Components
 */
class ActionComponent extends TDLComponent {
    /**
     * Create an ActionComponent.
     * @param {TDLSprite} actor - The performer of the action.
     */
    constructor(actor) {
        super(actor);

        /**
         * The performer of the action.
         * @type {TDLSprite}
         */
        this.actor = actor;

        /**
         * The default action to be played.
         * @type {TDLAction}
         */
        this.defaultAction = new AIdle(this, this.actor);

        /**
         * The queue of actions.
         * @type {Array}
         */
        this.queue = [this.defaultAction];
        this.queue[0].start();
    }

    /**
     * The queue is emptied and the new action is immediately performed.
     */
    static get DEFAULT_MODE() {
        return 0;
    }

    /**
     * The new action is added to the queue.
     */
    static get QUEUE_MODE() {
        return 1;
    }

    /**
     * The currently performed action is paused and the new action is immediately performed. Then the paused action is resumed.
     */
    static get PAUSE_MODE() {
        return 2;
    }

    /**
     * Start a new action or add that to the queue.
     * @param {TDLAction} action - The action to add or execute.
     * @param {Object} config - The config object for the action.
     * @param {Object} config.target - The target of the action.
     * @param {number} config.target.x - The x of the target of the action.
     * @param {number} [mode=ActionComponent.DEFAULT_MODE] - The mode to execute the action: ActionComponent.DEFAULT_MODE, ActionComponent.QUEUE_MODE or ActionComponent.PAUSE_MODE.
     */
    add(action, config, mode = ActionComponent.DEFAULT_MODE) {
        /*
        3 possibili comportamenti:
            - default: la queue si svuota, l'azione in 0 viene abortita e inizia la nuova azione
            - case 1: la nuova azione viene messa in fila nel primo posto libero in queue
            - case 2: metti in pausa l'azione 0 e inserisci la nuova azione al posto 0 (tutto scala indietro di una posizione)
        */
        let newAction = new action(this, this.actor, config);

        switch (mode) {
            case ActionComponent.DEFAULT_MODE: {
                this.queue[0].abort();
                this.queue = [];
                this.queue.push(newAction);
                this.queue[0].start();
            };
                break;

            case ActionComponent.QUEUE_MODE: {
                this.queue.push(newAction);
            };
                break;

            case ActionComponent.PAUSE_MODE: {
                this.queue[0].pause();
                this.queue.unshift(newAction);
                this.queue[0].start();
            };
                break;
        }

        return newAction;
    }

    /**
     * Remove a completed action from the queue.
     */
    remove() {
        this.queue.shift();
        if (this.queue.length <= 0) this.queue.push(this.defaultAction);
        if (this.queue[0].isPaused) this.queue[0].resume();
        else this.queue[0].start();
    }

    /**
     * Update the currently performed action.
     */
    update() {
        if (this.queue.length <= 0) this.queue.push(this.defaultAction);
        else if (this.queue.length > 1 && this.queue[0].name == 'AIdle') {
            this.queue.shift();
            if (this.queue[0].isPaused) this.queue[0].resume();
            else this.queue[0].start();
        }

        this.queue[0].update();
    }
}