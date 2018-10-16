class HardFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    constructor(component) {
        super('HardFlickeringAndTremblingBehaviour', component);
    }

    start(toRegister = true) {
        super.start(() => {
            this.hardFlickeringBehaviour = new HardFlickeringBehaviour(this.component);
            this.hardFlickeringBehaviour.start(false);
            this.tremblingBehaviour = new TremblingBehaviour(this.component);
            this.tremblingBehaviour.start(false);
            console.log('HARDFLICKTREMB start');
        });
    }

    stop() {
        super.stop(() => {
            if (typeof this.hardFlickeringBehaviour !== 'undefined') this.hardFlickeringBehaviour.stop(true);
            if (typeof this.tremblingBehaviour !== 'undefined') this.tremblingBehaviour.stop(true);
            console.log('HARDFLICKTREMB stop');
        });
    }
}