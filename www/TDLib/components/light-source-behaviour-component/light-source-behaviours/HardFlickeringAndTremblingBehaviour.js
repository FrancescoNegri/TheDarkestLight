/**
 * Class representing a hard flickering and trembling behaviour of a LightSource. 
 * @extends TDLib.Components.LightSourceBehaviours.LightSourceBehaviour
 * @memberof TDLib.Components.LightSourceBehaviours
 */
class HardFlickeringAndTremblingBehaviour extends LightSourceBehaviour {
    
    /**
     * Create a HardFlickeringAndTremblingBehaviour.
     * @param {TDlib.Components.LightSourceBehaviours.LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {TDlib.Components.LightSourceBehaviours.LightSourceBehaviour} [calledByBehaviour=null] - The behaviour which is invoking this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
        
        /**
         * Set as defined the runningSubBehaviours array 
         * @type {Array}
         */
        this.runningSubBehaviours = [];
        
        /**
         * Create statically hardFlickeringBehaviour instance that will be a subBehaviour
         * @type {TDlib.Components.LightSourceBehaviours.HardFlickeringBehaviour}
         */
        this.hardFlickeringBehaviour = new HardFlickeringBehaviour(this.component,this);
        
        /**
         * Create statically tremblingBehaviour instance that will be a subBehaviour
         * @type {TDlib.Components.LightSourceBehaviours.TremblingBehaviour}
         */
        this.tremblingBehaviour = new TremblingBehaviour(this.component,this);
    }

    /**
     * Start the hard flickering and the trembling behaviours in the same time if it's an allowed behavior.
     * @param {number} [minTimeHardFlickering=10] - Minimum time gap between two switch in milliseconds.
     * @param {number} [maxTimeHardFlickering=400] - Maximum time gap between two switch in milliseconds.
     * @param {number} [minTimeTrembling=10] - Minimum time gap between two tremblings in milliseconds.
     * @param {number} [maxTimeTrembling=100] - Maximum time gap between two tremblings in milliseconds.
     * @param {boolean} [movementOnXAxis=true] - Determines if the light source has to move on X axis.
     * @param {number} [xMinOscillation=2] - Minimum displcement on X axis in pixels.
     * @param {number} [xMaxOscillation=10] - Maximum displcement on X axis in pixels.
     * @param {boolean} [movementeOnYAxis=true] - Determines if the light source has to move on Y axis.
     * @param {number} [yMinOscillation=-1] - Minimum displcement on Y axis in pixels.
     * @param {number} [yMaxOscillation=-1] - Maximum displcement on Y axis in pixels.
     */
    start(minTimeHardFlickering, maxTimeHardFlickering, minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation) {
        super.start(() => {
            this.hardFlickeringBehaviour.start(minTimeHardFlickering, maxTimeHardFlickering);
            this.tremblingBehaviour.start(minTimeTrembling, maxTimeTrembling, movementOnXAxis, xMinOscillation, xMaxOscillation, movementeOnYAxis, yMinOscillation, yMaxOscillation);
            //console.log(this.runningSubBehaviours);
            console.log('HARDFLICKTREMB start');
        });
    }

    /**
     * Stop the hard flickering and trembling behaviour.
     * @param {string} finalState - (on/off) Set the light switched on or off at the end of the effect.
     * @param {boolean} [backToInitialPosition=true] - Back to the sarting position of the light at the end of the effect.
     */
    stop(finalState, backToInitialPosition) {
        super.stop(() => {
            this.hardFlickeringBehaviour.stop(finalState);
            this.tremblingBehaviour.stop(backToInitialPosition);
            //console.log(this.runningSubBehaviours);
            console.log('HARDFLICKTREMB stop');
        });
    }
}