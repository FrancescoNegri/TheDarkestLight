class HardFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
        this.runningSubBehaviours = [];
        this.hardFlickeringBehaviour = new HardFlickeringBehaviour(this.component,this);
        this.tremblingBehaviour = new TremblingBehaviour(this.component,this);
    }

    start() {
        super.start(() => {
            this.hardFlickeringBehaviour.start();
            this.tremblingBehaviour.start();
            console.log(this.runningSubBehaviours);
            console.log('HARDFLICKTREMB start');
        });
    }

    stop() {
        super.stop(() => {
            this.hardFlickeringBehaviour.stop();
            this.tremblingBehaviour.stop();
            console.log('HARDFLICKTREMB stop');
        });
    }
}