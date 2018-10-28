class SoftFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
        this.runningSubBehaviours = [];
        this.softFlickeringBehaviour = new SoftFlickeringBehaviour(this.component, this);
        this.tremblingBehaviour = new TremblingBehaviour(this.component, this);
    }

    start(minTimeSoftFlickering, maxTimeSoftFlickering, minPercentageIntensity, maxPercentageIntensity, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        super.start(() => {
            this.softFlickeringBehaviour.start(minTimeSoftFlickering, maxTimeSoftFlickering, minPercentageIntensity, maxPercentageIntensity);
            this.tremblingBehaviour.start(minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation);
            //console.log(this.runningSubBehaviours);
            console.log('SOFTFLICKTREMB start');
        });
    }

    stop(backToInitialIntensity, backToInitialPosition) {
        super.stop(() => {
            this.softFlickeringBehaviour.stop(backToInitialIntensity);
            this.tremblingBehaviour.stop(backToInitialPosition);
            //console.log(this.runningSubBehaviours);
            console.log('SOFTFLICKTREMB stop');
        });
    }
}