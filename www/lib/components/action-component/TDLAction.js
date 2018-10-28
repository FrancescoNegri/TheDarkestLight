//Eventualmente è possbile a questo punto creare una funzione che permetta di aggiungere in coda alla queue nuove azioni (dopo un controllo)

/**
 * Class representing a TDLAction.
 * @memberof Components.Actions
 */
class TDLAction {
    /**
     * Start a new TDLAction.
     * @param {ActionComponent|TDLAction} invoker - The invoker of the action.
     * @param {TDLSprite} actor - The actor who performs the action.
     * @param {Object} config - The config object for the action.
     * @param {Object} config.target - The target of the action.
     * @param {number} config.target.x - The x of the target of the action.
     */
    constructor(invoker, actor, config = { }) {
        /**
         * The invoker of the action.
         * @type {ActionComponent|TDLAction}
         */
        this.invoker = invoker;

        /**
         * The name of the action.
         * @type {string}
         */
        this.name = this.constructor.name;

        /**
         * The actor who performs the action.
         * @type {TDLSprite}
         */
        this.actor = actor;

        /**
         * The target of the action.
         * @type {Object|TDLSprite}
         */
        this.target = config.target;

        /**
         * The config object for the action.
         * @type {Object}
         */
        this.config = config;

        /**
         * The queue of actions.
         * @type {Array}
         */
        this.queue = [];

        /**
         * Tells if the action has been paused.
         * @type {boolean}
         */
        this.isPaused = false;
    }

    /**
     * Add a queue of actions.
     * @param {Array} queue - The queue of actions to add.
     */
    addQueue(queue) {
        this.queue = queue;
    }

    /**
     * The blank action to create new actions extending TDLAction.
     * @type {ActionComponent.BaseAction}
     */
    static get BaseAction() {
        return class BaseAction {
            constructor(invoker, startCallback = () => { }, finishCallback = () => { }, updateCallback = () => { }, resumeCallback = startCallback, pauseCallback = finishCallback) {
                this.invoker = invoker;

                this.startCallback = startCallback;
                this.finishCallback = finishCallback;
                this.updateCallback = updateCallback;
                this.resumeCallback = resumeCallback;
                this.pauseCallback = pauseCallback;

                this.isPaused = false;
            }

            start() {
                this.startCallback();
            }

            finish() {
                this.finishCallback();
                this.invoker.remove();
            }

            abort() {
                this.finishCallback();
            }

            resume() {
                this.isPaused = false;
                this.resumeCallback();
            }

            pause() {
                this.pauseCallback();
                this.isPaused = true;
            }

            update() {
                this.updateCallback();
            }
        }
    }

    /**
     * Abort an uncompleted action.
     */
    abort() {
        console.log(this.name, 'aborted');
        this.queue[0].abort();
    }

    /**
     * Start an action.
     */
    start() {
        console.log(this.name, 'started');
        this.queue[0].start();
    }

    /**
     * Finish a completed action.
     */
    finish() {
        this.queue[0].finish();
    }

    /**
     * Remove a completed action from the queue.
     */
    remove() {
        this.queue.shift();
        if (this.queue.length <= 0) {
            console.log(this.name, 'finished');
            this.invoker.remove();
        }
        else this.queue[0].start();
    }

    /**
     * Pause an action.
     */
    pause() {
        console.log(this.name, 'paused');
        this.queue[0].pause();
        this.isPaused = true;
    }

    /**
     * Resume a paused action.
     */
    resume() {
        console.log(this.name, 'resumed');
        this.isPaused = false;
        this.queue[0].resume();
    }

    /**
     * Update the currently performed action.
     */
    update() {
        this.queue[0].update();
    }
}