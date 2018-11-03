/**
 * Class representing a trembling behaviour of a LightSource.
 * @extends TDLib.Components.LightSourceBehaviours.LightSourceBehaviour
 * @memberof TDLib.Components.LightSourceBehaviours
 */
class TremblingBehaviour extends LightSourceBehaviour {
    /**
     * Create a TremblingBehaviour.
     * @param {LightSourceBehaviourComponent} component - The component which called the behaviour.
     * @param {LightSourceBehaviour} [calledByBehaviour=null] - The behaviour which is invoking this as a subBehaviour, if exists.
     */
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

    /**
     * Start the trembling behaviour.
     * @param {number} [minTime=10] - Minimum time gap between two tremblings in milliseconds.
     * @param {number} [maxTime=100] - Maximum time gap between two tremblings in milliseconds.
     * @param {boolean} [movementOnXAxis=true] - Determines if the light source has to move on X axis.
     * @param {number} [xMinOscillation=2] - Minimum displcement on X axis in pixels.
     * @param {number} [xMaxOscillation=10] - Maximum displcement on X axis in pixels.
     * @param {boolean} [movementeOnYAxis=true] - Determines if the light source has to move on Y axis.
     * @param {number} [yMinOscillation=-1] - Minimum displcement on Y axis in pixels.
     * @param {number} [yMaxOscillation=-1] - Maximum displcement on Y axis in pixels.
     */
    start(minTime = 10, maxTime = 100, movementOnXAxis = true, xMinOscillation = 2, xMaxOscillation = 10, movementeOnYAxis = true, yMinOscillation = -1, yMaxOscillation = -1) {
        super.start(() => {
            yMinOscillation = yMinOscillation < 0 ? xMinOscillation : yMinOscillation;
            yMaxOscillation = yMaxOscillation < 0 ? xMaxOscillation : yMaxOscillation;
            var config = {
                minTime: minTime,
                maxTime: maxTime,
                xMinOscillation: xMinOscillation,
                xMaxOscillation: xMaxOscillation,
                yMinOscillation: yMinOscillation,
                yMaxOscillation: yMaxOscillation,
                movementOnXAxis: movementOnXAxis,
                movementeOnYAxis: movementeOnYAxis,
            }
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
                            var xNewOffset = 0;
                            var yNewOffset = 0;
                            if (config.movementOnXAxis) {
                                xNewOffset = Math.floor(Math.random() * (xMaxOscillation - xMinOscillation + 1)) + xMinOscillation;
                                xNewOffset *= Math.round(Math.random()) * 2 - 1;
                            }
                            if (config.movementeOnYAxis) {
                                yNewOffset = Math.floor(Math.random() * yMaxOscillation - yMinOscillation + 1) + yMinOscillation;
                                yNewOffset *= Math.round(Math.random()) * 2 - 1;
                            }
                            this.component.gameObject.graphicLight.setPosition(this.component.gameObject.x + xNewOffset, this.component.gameObject.y + yNewOffset);
                            setTimer(this);
                        }

                    },
                    callbackScope: context,
                    repeat: 0
                })
            }
            setTimer(this);
            console.log('TREMBLING start');
        });
    }

    /**
     * Stop the trembling behaviour.
     * @param {boolean} [backToInitialPosition=true] - Specify if the LightSource.graphicLight has to return at the defualt position.
     */
    stop(backToInitialPosition = true) {
        super.stop(() => {
            if (backToInitialPosition) {
                this.component.gameObject.graphicLight.setPosition(this.component.gameObject.x + this.component.gameObject.config.offset.x, this.component.gameObject.y + this.component.gameObject.config.offset.y);
            } else {
                this.component.gameObject.config.offset= {
                    x: this.component.gameObject.x - this.component.gameObject.graphicLight.x, 
                    y: this.component.gameObject.y - this.component.gameObject.graphicLight.y
                }
            }

            console.log('TREMBLING stop');
        });
    }
}