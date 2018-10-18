/**
 * Class representing a behaviour of a LightSource.
 */
class LightSourceBehaviour {
    /**
     * Create a LightSourceBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour] - The behaviour which is invoking this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        this.name = this.constructor.name;
        this.component = component;
        this.calledByBehaviour = calledByBehaviour;
    }

    /**
     * Start a behaviour.
     * @param {*} callback - The callback to execute once the behaviour is started.
     */
    start(callback) {
        if (this.calledByBehaviour === null) {
            if (this.component.allowedBehaviours.length > 0) {
                if (this.component.allowedBehaviours.includes(this.name)) {
                    if (this.component.runningBehaviour !== this.name) {
                        this.isStarting = true; //Necessaria per non stoppare il behaviour durante lo stop generale
                        this.component.stopAllBehaviours(this.name);
                        this.component.runningBehaviour = this.name;
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
            this.calledByBehaviour.runningSubBehaviours.push(this.name);
            this.isStarting = false;
            callback();
        }
    }

    /**
     * Stop a behaviour.
     * @param {*} callback - The callback to execute once the behaviour is stopped.
     */
    stop(callback = () => { }) {
        if (!this.isStarting) {
            if (this.calledByBehaviour === null) {
                if (this.component.runningBehaviour == this.name) {
                    this.component.runningBehaviour = null;
                    callback();
                }
            }
            else {
                if (this.calledByBehaviour.runningSubBehaviours.indexOf(this.name) != -1) {
                    this.calledByBehaviour.runningSubBehaviours.splice(this.calledByBehaviour.runningSubBehaviours.indexOf(this.name), 1);
                    callback();
                }
            }
        }
    }
}