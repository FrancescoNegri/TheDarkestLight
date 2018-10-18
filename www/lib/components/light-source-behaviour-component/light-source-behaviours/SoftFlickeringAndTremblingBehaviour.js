class SoftFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
        this.runningSubBehaviours = [];
        this.softFlickeringBehaviour = new SoftFlickeringBehaviour(this.component,this);
        this.tremblingBehaviour = new TremblingBehaviour(this.component,this);
    }

    start() {
        super.start(() => {
            this.softFlickeringBehaviour.start();
            this.tremblingBehaviour.start();
            //console.log(this.runningSubBehaviours);
            console.log('SOFTFLICKTREMB start');
        });
    }

    stop() {
        super.stop(() => {
            this.softFlickeringBehaviour.stop();
            this.tremblingBehaviour.stop();
            //console.log(this.runningSubBehaviours);
            console.log('SOFTFLICKTREMB stop');
        });
    }
}