class HardFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
        this.runningSubBehaviours = [];
        this.hardFlickeringBehaviour = new HardFlickeringBehaviour(this.component,this);
        this.tremblingBehaviour = new TremblingBehaviour(this.component,this);
    }

    start(minTimeHardFlickering, maxTimeHardFlickering, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        super.start(() => {
            this.hardFlickeringBehaviour.start(minTimeHardFlickering, maxTimeHardFlickering);
            this.tremblingBehaviour.start(minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation);
            //console.log(this.runningSubBehaviours);
            console.log('HARDFLICKTREMB start');
        });
    }

    stop(finalState, backToInitialPosition) {
        super.stop(() => {
            this.hardFlickeringBehaviour.stop(finalState);
            this.tremblingBehaviour.stop(backToInitialPosition);
            //console.log(this.runningSubBehaviours);
            console.log('HARDFLICKTREMB stop');
        });
    }
}