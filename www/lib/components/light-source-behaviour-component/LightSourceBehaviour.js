/**
 * Class representing a behaviour of a LightSource.
 */
class LightSourceBehaviour {
    /**
     * Create a LightSourceBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour] - The behaviour which is inoving this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        this.name = this.constructor.name;
        this.component = component;
        this.calledByBehaviour = calledByBehaviour;
    }

    start(callback = () => { }) {
        if (this.calledByBehaviour === null) {
            //Spostare i controlli su tre livelli diversi e scrivere un console.warn appropriato per ciascuno
            if (this.component.allowedBehaviours.length > 0 && this.component.allowedBehaviours.includes(this.name) && this.component.runningBehaviour !== this.name) {
                this.isStarting = true; //Necessaria per non stoppare il behaviour durante lo stop generale
                this.component.stopAllBehaviours(this.name);
                this.registerToComponent();
                //console.log('Starting behaviour', this.name);
                this.isStarting = false;
                callback();
            }
            else {
                console.warn('ALERT: trying to start a non-existing or non-allowed behaviour or an alredy running behaviour!');
            }
        } else {
            this.isStarting = true;
            this.registerToBehaviour();
            //console.log('Starting subBehaviour', this.name);
            this.isStarting = false;
            callback();
        }
    }

    stop(callback = () => { }) {
        if (!this.isStarting) {
            if (this.calledByBehaviour === null) {
                if (this.component.runningBehaviour == this.name) {
                    callback();
                    this.unregisterToComponent();
                }
            }
            else {
                if (this.calledByBehaviour.runningSubBehaviours.indexOf(this.name) != -1) {
                    callback();
                    this.unregisterToBehaviour();
                }
            }
        }
    }

    registerToComponent() {
        this.component.runningBehaviour = this.name;
    }

    unregisterToComponent() {
        this.component.runningBehaviour = null;
    }

    registerToBehaviour() {
        this.calledByBehaviour.runningSubBehaviours.push(this.name);
    }

    unregisterToBehaviour() {
        this.calledByBehaviour.runningSubBehaviours.slice(this.calledByBehaviour.runningSubBehaviours.indexOf(this.constructor.name), 1);
    }
}