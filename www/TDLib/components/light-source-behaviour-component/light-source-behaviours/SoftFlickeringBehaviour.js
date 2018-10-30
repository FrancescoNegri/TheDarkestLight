/**
 * Class representing a soft flickering behaviour of a LightSource. 
 * @extends TDLib.Components.LightSourceBehaviours.LightSourceBehaviour
 * @memberof TDLib.Components.LightSourceBehaviours
 */
class SoftFlickeringBehaviour extends LightSourceBehaviour {
    /**
     * Create a SoftFlickeringBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour=null] - The behaviour which is invoking this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

    /**
     * Start soft flickering behavior (only flicker the intensity) if it's an allowed behavior.
     * @param {number} [minTime=10] - Minimum time gap between two flickers in milliseconds.
     * @param {number} [maxTime=100] - Maximum time gap between two flickers in milliseconds.
     * @param {number} [minPercentageIntensity=0.8] - Minimum light intensity reacheable during the effect. Value between 0 and 1. 
     * @param {number} [maxPercentageIntensity=1] - Minimum light intensity reacheable during the effect. Value between 0 and 1.
     */
    start(minTime = 10, maxTime = 100, minPercentageIntensity = 0.8, maxPercentageIntensity = 1) {
        super.start(() => {
            
            var setTimer = (context) => {
                context.component.gameObject.room.time.addEvent({
                    delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                    callback: () => {

                        var isRunning = false;
                        if (this.calledByBehaviour === null) {
                            if (this.component.runningBehaviour === this.name) isRunning = true;
                        }
                        else {
                            if (this.calledByBehaviour.runningSubBehaviours.indexOf(this.name) != -1) isRunning = true;
                        }

                        if (isRunning) {
                            var newIntensityPercentage = Math.floor((minPercentageIntensity + Math.random() * (maxPercentageIntensity - minPercentageIntensity)) * 100 + 1) / 100;
                            this.component.gameObject.graphicLight.setIntensity(this.component.gameObject.config.graphicLight.intensity * newIntensityPercentage);
                            this.component.gameObject.diffusedLight.setIntensity(this.component.gameObject.config.diffusedLight.intensity * newIntensityPercentage);
                            setTimer(this);
                        }

                    },
                    callbackScope: context,
                    repeat: 0
                })
            }
            setTimer(this);
            console.log('SOFTFLICKERING start');
        });
    }

    /**
     * Stop flickering the intenisity of the light.
     * @param {boolean} [backToInitialIntensity=true] - Back to the initial light position before the effect.
     */
    stop(backToInitialIntensity = true) {
        super.stop(() => {
            if (backToInitialIntensity) {
                this.component.gameObject.graphicLight.setIntensity(this.component.gameObject.config.graphicLight.intensity);
                this.component.gameObject.diffusedLight.setIntensity(this.component.gameObject.config.diffusedLight.intensity);
            }
            console.log('SOFTFLICKERING stop');
        });
    }
}