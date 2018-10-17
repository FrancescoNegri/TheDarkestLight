class LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        this.name = this.constructor.name;
        this.component = component;
        this.calledByBehaviour = calledByBehaviour;
        //cosole.log('LightSourceBehaviour cerated');
    }

    start(callback = () => { }) {
        if (this.calledByBehaviour === null) {
            if (this.component.allowedBehaviours.length > 0 && this.component.allowedBehaviours.includes(this.name) && this.component.runningBehaviour !== this.name) {
                console.log('entering Prime Behavior start', this.name);
                this.isStarting = true; //Necessaria per non stoppare il behaviour durante lo stop generale
                this.component.stopAllBehaviours(this.name);
                this.registerToComponent();
                console.log('Starting component', this.name);
                this.isStarting = false;
                callback();
            }
            else {
                console.warn('ALERT: trying to start a non-existing or non-allowed behaviour or an alredy current effect!');
            }
        } else {
            console.log('entering subBehaviour start', this.name);
            this.isStarting = true;
            this.registerToBehaviour();
            console.log('Starting subBehaviour', this.name);
            this.isStarting = false;
            callback();
        }
    }

    stop(callback = () => { }) {
        if (this.isStarting) /*console.log('Booting. Not stopping', this.name)*/;
        else {
            //console.log('Stopping component', this.name);
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