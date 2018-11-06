/**
 * Class representing a behaviour of a LightSource.
 * @memberof TDLib.Components.LightSourceBehaviours
 */
class LightSourceBehaviour {
    /**
     * Create a LightSourceBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour=null] - The behaviour which is invoking this as a subBehaviour, if exists.
     * @param {number} [behaviourLightContributeFactor=1] - Behaviour can modify the light contribute of the light while running. Value beetween 0 and 1. (0 means light as it is turned off for the light contribute).
     */
    constructor(component, calledByBehaviour = null, behaviourLightContributeFactor = 1) {
        /**
         * The name of the lightSourceBehaviour
         */
        this.name = this.constructor.name;

        /**
         * Specify the component which own this lightSourceBehaviour
         */
        this.component = component;

        /**
         * Specify the complex behaviour of which this lightSourceBehaviour is part
         */
        this.calledByBehaviour = calledByBehaviour;

        /**
         * Specify the factor modifier of the light contribute caused by the behaviour
         */
        this.behaviourLightContributeFactor = behaviourLightContributeFactor;
    }

    /**
     * Start a behaviour.
     * @param {function} callback - The callback to execute once the behaviour is started.
     */
    start(callback) {
        if (this.calledByBehaviour === null) {
            if (this.component.allowedBehaviours.length > 0) {
                if (this.component.allowedBehaviours.find(behaviour => this instanceof behaviour)) {
                    if (this.component.runningBehaviour !== this) {
                        this.isStarting = true; //Necessaria per non stoppare il behaviour durante lo stop generale
                        this.component.stopAllBehaviours();
                        this.component.runningBehaviour = this;
                        this.isStarting = false;
                        callback();
                    }
                    else {
                        console.warn('ALERT: alredy running behaviour -', this.name);
                    }
                }
                else {
                    console.warn('ALERT: trying to start a non-allowed behaviour -', this.name);
                }

            }
        }
        else {
            this.isStarting = true;
            this.calledByBehaviour.runningSubBehaviours.push(this);
            this.isStarting = false;
            callback();
        }
    }

    /**
     * Stop a behaviour.
     * @param {function} callback - The callback to execute once the behaviour is stopped.
     */
    stop(callback) {
        if (!this.isStarting) {
            if (this.calledByBehaviour === null) {
                if (this.component.runningBehaviour == this) {
                    this.component.runningBehaviour = null;
                    callback();
                }
            }
            else {
                if (this.calledByBehaviour.runningSubBehaviours.indexOf(this) != -1) {
                    this.calledByBehaviour.runningSubBehaviours.splice(this.calledByBehaviour.runningSubBehaviours.indexOf(this), 1);
                    callback();
                }
            }
        }
    }
}