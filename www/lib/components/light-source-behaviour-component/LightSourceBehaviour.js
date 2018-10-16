class LightSourceBehaviour {
    constructor(name, component) {
        this.name = name;
        this.component = component;

        //console.log('Added', this.name, 'to', this.component, ', component of', this.component.gameObject);
    }

    start(callback = () => { }) {
        if (this.component.allowedBehaviours.length > 0 && this.component.allowedBehaviours.includes(this.name)) {
            this.isBooting = true; //Necessaria per non stoppare il behaviour durante lo stop generale
            this.component.stopAllBehaviours(this.name);
            this.component.currentBehaviour = this.name;
            this.isBooting = false;
            console.log('Starting component', this.name);
            callback();
        }
        else {
            console.warn('ALERT: trying to start a non-existing or non-allowed behaviour!');
        }
    }

    stop(callback = () => { }) {
        if (this.isBooting) console.log('Booting. Not stopping', this.name);
        else {
            console.log('Stopping component', this.name);
            if (this.component.currentBehaviour === this.name) callback();
            this.component.currentBehaviour = null;
        }
    }
}