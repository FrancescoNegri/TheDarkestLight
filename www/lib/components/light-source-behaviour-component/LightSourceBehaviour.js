class LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        this.name = this.constructor.name;
        this.component = component;
        this.calledByBehaviour = calledByBehaviour;
    }

    start(callback = () => { }) {
        if (this.calledByBehaviour === null) {
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
                if (this.component.allowedBehaviours.length <= 0) console.warn('allowed behaviour is null');
                if (!(this.component.allowedBehaviours.includes(this.name))) console.warn('not allowed Behaviour');
                if (this.component.runningBehaviour === this.name) console.warn('already running Behaviour');
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
                    this.unregisterToComponent();
                    callback();
                }
            }
            else {
                if (this.calledByBehaviour.runningSubBehaviours.indexOf(this.name) != -1) {
                    this.unregisterToBehaviour();
                    callback();
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
        this.calledByBehaviour.runningSubBehaviours.splice(this.calledByBehaviour.runningSubBehaviours.indexOf(this.name), 1);
    }
}