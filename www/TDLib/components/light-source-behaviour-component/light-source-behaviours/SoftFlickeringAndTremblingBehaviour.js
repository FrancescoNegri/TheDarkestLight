/**
 * Class representing a soft flickering and trembling behaviour of a LightSource. 
 * @extends TDLib.Components.LightSourceBehaviours.LightSourceBehaviour
 * @memberof TDLib.Components.LightSourceBehaviour
 */
class SoftFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    
    /**
     * Create a SoftFlickeringAndTremblingBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour=null] - The behaviour which is invoking this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);

        /**
         * Set as defined the runningSubBehaviours array 
         */
        this.runningSubBehaviours = [];

        /**
         * Create statically softFlickeringBehaviour instance that will be a subBehaviour
         */
        this.softFlickeringBehaviour = new SoftFlickeringBehaviour(this.component, this);

        /**
         * Create statically tremblingBehaviour instance that will be a subBehaviour
         */
        this.tremblingBehaviour = new TremblingBehaviour(this.component, this);
    }

    /**
     * Start the soft flickering and the trembling behaviours in the same time if it's an allowed behavior.
     * @param {number} [minTimeSoftFlickering=10] - Minimum time gap between two flickers in milliseconds.
     * @param {number} [maxTimeSoftFlickering=100] - Maximum time gap between two flickers in milliseconds.
     * @param {number} [minPercentageIntensity=0.8] - Minimum light intensity reacheable during the effect. Value between 0 and 1. 
     * @param {number} [maxPercentageIntensity=1] - Minimum light intensity reacheable during the effect. Value between 0 and 1.
     * @param {number} [minTimeTrembling=10] - Minimum time gap between two tremblings in milliseconds.
     * @param {number} [maxTimeTrembling=100] - Maximum time gap between two tremblings in milliseconds.
     * @param {boolean} [movementOnXAxis=true] - Determines if the light source has to move on X axis.
     * @param {number} [xMinOscillation=2] - Minimum displcement on X axis in pixels.
     * @param {number} [xMaxOscillation=10] - Maximum displcement on X axis in pixels.
     * @param {boolean} [movementeOnYAxis=true] - Determines if the light source has to move on Y axis.
     * @param {number} [yMinOscillation=-1] - Minimum displcement on Y axis in pixels.
     * @param {number} [yMaxOscillation=-1] - Maximum displcement on Y axis in pixels.
     */
    start(minTimeSoftFlickering, maxTimeSoftFlickering, minPercentageIntensity, maxPercentageIntensity, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        super.start(() => {
            this.softFlickeringBehaviour.start(minTimeSoftFlickering, maxTimeSoftFlickering, minPercentageIntensity, maxPercentageIntensity);
            this.tremblingBehaviour.start(minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation);
            //console.log(this.runningSubBehaviours);
            console.log('SOFTFLICKTREMB start');
        });
    }

    /**
     * Stop the soft flickering and trembling behaviour.
     * @param {boolean} [backToInitialIntensity=true] - Back to the initial light position before the effect.
     * @param {boolean} [backToInitialPosition=true] - Back to the sarting position of the light at the end of the effect.
     */
    stop(backToInitialIntensity, backToInitialPosition) {
        super.stop(() => {
            this.softFlickeringBehaviour.stop(backToInitialIntensity);
            this.tremblingBehaviour.stop(backToInitialPosition);
            //console.log(this.runningSubBehaviours);
            console.log('SOFTFLICKTREMB stop');
        });
    }
}