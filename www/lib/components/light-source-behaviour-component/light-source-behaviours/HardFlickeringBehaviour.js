class HardFlickeringBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super(component, calledByBehaviour);
    }

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
                            if (this.component.gameObject.isOn) this.component.gameObject.turnOff();
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

    stop(finalState = 'on') {
        super.stop(() => {
            if (finalState == 'on') this.component.gameObject.turnOn();
            else if (finalState == 'off') this.component.gameObject.turnOff();
            console.log('HARDFLICKERING stop');
        });
    }
}