class TremblingBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

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
            if (this.calledByBehaviour === null) setTimer(this)
            setTimer(this);
            console.log('TREMBLING start');
        });
    }

    stop(backToInitialPosition = true) {
        super.stop(() => {
            if (backToInitialPosition) this.component.gameObject.graphicLight.setPosition(this.component.gameObject.x + this.component.gameObject.config.offset.x, this.component.gameObject.y + this.component.gameObject.config.offset.y);
            console.log('TREMBLING stop');
        });
    }
}