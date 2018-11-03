/**
 * Class representing a hard flickering behaviour of a LightSource. 
 * @extends TDLib.Components.LightSourceBehaviours.LightSourceBehaviour
 * @memberof TDLib.Components.LightSourceBehaviours
 */
class HardFlickeringBehaviour extends LightSourceBehaviour {

    /**
     * Create a SoftFlickeringAndTremblingBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour=null] - The behaviour which is invoking this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

    /**
     * Start the hard flickering behaviour if it's an allowed behavior.
     * @param {number} [minTime=10] - Minimum time gap between two switch in milliseconds.
     * @param {number} [maxTime=400] - Maximum time gap between two switch in milliseconds.
     */
    start(minTime = 10, maxTime = 400) {
        this.initialConfig = {
            graphicLight: {
                intensity: this.component.gameObject.config.graphicLight.intensity,
            },
            diffusedLight: {
                intensity: this.component.gameObject.config.diffusedLight.intensity,
            },
        }

        // nel caso si voglia settare che l'hard flickering viene considerato come una luce spenta per la durata dell'effetto
        /*if (this.component.gameObject.initialConfig.graphicLight !== null) {
            this.component.gameObject.config.graphicLight.intensity = 0;
        }
        if (this.component.gameObject.initialConfig.diffusedLight !== null) {
            this.component.gameObject.config.diffusedLight.intensity = 0;
        }*/

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
                            if (this.component.gameObject.initialConfig.graphicLight !== null) {
                                if (this.component.gameObject.graphicLight.intensity == 0) this.component.gameObject.graphicLight.setIntensity(this.initialConfig.graphicLight.intensity);
                                else this.component.gameObject.graphicLight.setIntensity(0);
                            }

                            if (this.component.gameObject.initialConfig.diffusedLight !== null) {
                                if (this.component.gameObject.diffusedLight.intensity == 0) this.component.gameObject.diffusedLight.setIntensity(this.initialConfig.diffusedLight.intensity);
                                else this.component.gameObject.diffusedLight.setIntensity(0);
                            }
                            setTimer(this);
                        }
                    },
                    callbackScope: context,
                    repeat: 0
                })
            };
            setTimer(this);
            console.log('HARDFLICKERING start');
        });
    }

    /**
     * Stop of the flickering effect.
     * @param {string} [finalState='on'] - (on/off) Set the light switched on or off at the end of the effect. 
     */
    stop(finalState = 'on') {
        super.stop(() => {
            if (finalState == 'on') {
                //this.component.gameObject.turnOn(); se facciamo il turn on le luci tornano allo stato iniziale di partenza.
                if (this.component.gameObject.initialConfig.graphicLight !== null) {
                    this.component.gameObject.graphicLight.intensity = this.initialConfig.graphicLight.intensity;
                }
                if (this.component.gameObject.initialConfig.diffusedLight !== null) {
                    this.component.gameObject.diffusedLight.intensity = this.initialConfig.diffusedLight.intensity;
                }
            }
            else if (finalState == 'off') this.component.gameObject.turnOff();
            console.log('HARDFLICKERING stop');
        });
    }
}