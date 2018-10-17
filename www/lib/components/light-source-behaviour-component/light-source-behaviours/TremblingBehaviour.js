class TremblingBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

    start(minTime = 10, maxTime=  100, movementOnXAxis = true, xMinOscillation =2 , xMaxOscillation= 10, movementeOnYAxis = true, yMinOscillation = -1, yMaxOscillation = -1) {
        super.start(() => {
            /*yMinOscillation = yMinOscillation < 0 ? xMinOscillation : yMinOscillation;
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
                context.room.time.addEvent({
                    delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                    callback: () => {
                        if (this.component.currentBehaviour.isRunning) {
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
                            this.graphicLight.setPosition(this.x + xNewOffset, this.y + yNewOffset);
                            setTimer(this);
                        }
                    },
                    callbackScope: context,
                    repeat: 0
                })
            }
            setTimer(this);*/
            console.log('TREMBLING start');
        });
    }

    stop() {
        super.stop(() => {
            console.log('TREMBLING stop');
        });
    }
}