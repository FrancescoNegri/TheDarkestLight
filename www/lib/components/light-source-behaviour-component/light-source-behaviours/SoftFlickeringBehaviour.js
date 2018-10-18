class SoftFlickeringBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

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

    stop(backInitialIntensity = true) {
        super.stop(() => {
            if (backInitialIntensity) {
                this.component.gameObject.graphicLight.setIntensity(this.component.gameObject.config.graphicLight.intensity);
                this.component.gameObject.diffusedLight.setIntensity(this.component.gameObject.config.diffusedLight.intensity);
            }
            console.log('SOFTFLICKERING stop');
        });
    }
}