//Eventualmente è possbile a questo punto creare una funzione che permetta di aggiungere in coda alla queue nuove azioni (dopo un controllo)

/**
 * Class representing a TDLAction.
 * @memberof TDLib.Components.Actions
 */
class TDLAction {
    /**
     * Start a new TDLAction.
     * @param {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction} invoker - The invoker of the action.
     * @param {TDLSprite} actor - The actor who performs the action.
     * @param {Object} config - The config object for the action.
     * @param {Object} config.target - The target of the action.
     * @param {number} config.target.x - The x of the target of the action.
     */
    constructor(invoker, actor, config = {}) {
        /**
         * The invoker of the action.
         * @type {TDLib.Components.ActionComponent|TDLib.Components.Actions.TDLAction}
         */
        this.invoker = invoker;

        /**
         * The name of the action.
         * @type {string}
         */
        this.name = this.constructor.name;

        /**
         * The actor who performs the action.
         * @type {TDLib.Sprites.TDLSprite}
         */
        this.actor = actor;

        /**
         * The target of the action.
         * @type {Object|TDLib.Sprites.TDLSprite}
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
         * @private
         */
        this._queue = [];

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
        this._queue = queue;
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
     * @private
     */
    abort() {
        if (this._queue.length > 0) {
            this._queue[0].abort();
            console.log(this.name, 'aborted');
        }
    }

    /**
     * Start an action.
     * @private
     */
    start() {
        if (this._queue.length > 0) {
            this._queue[0].start();
            console.log(this.name, 'started');
        }
    }

    /**
     * Finish a completed action.
     * @private
     */
    finish() {
        if (this._queue.length > 0) this._queue[0].finish();
    }

    /**
     * Remove a completed action from the queue.
     * @private
     */
    remove() {
        if (this._queue.length > 0) this._queue.shift();

        if (this._queue.length <= 0) {
            console.log(this.name, 'finished');
            this.invoker.remove();
        }
        else this._queue[0].start();
    }

    /**
     * Pause an action.
     * @private
     */
    pause() {
        if (this._queue.length > 0) {
            console.log(this.name, 'paused');
            this._queue[0].pause();
            this.isPaused = true;
        }
    }

    /**
     * Resume a paused action.
     * @private
     */
    resume() {
        if (this._queue.length > 0) {
            console.log(this.name, 'resumed');
            this.isPaused = false;
            this._queue[0].resume();
        }
    }

    /**
     * Update the currently performed action.
     * @private
     */
    update() {
        if (this._queue.length > 0) this._queue[0].update();
    }
}