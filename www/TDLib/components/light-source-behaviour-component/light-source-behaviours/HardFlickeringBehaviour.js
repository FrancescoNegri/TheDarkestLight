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
        super.start(() => {
            /*var minTime = minTime;
            var maxTime = maxTime;*/
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
                            if (this.component.gameObject.isOn) this.component.gameObject.turnOff(false);
                            else if (!this.component.gameObject.isOn) this.component.gameObject.turnOn();
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
            if (finalState == 'on') this.component.gameObject.turnOn();
            else if (finalState == 'off') this.component.gameObject.turnOff();
            console.log('HARDFLICKERING stop');
        });
    }
}