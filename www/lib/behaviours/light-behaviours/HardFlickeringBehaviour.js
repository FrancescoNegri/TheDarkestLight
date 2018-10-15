class HardFlickeringBehaviour extends TDLBehaviours{
    constructor(component){
        super(component);
        this.name= 'HardFlickering';
        console.log('HardFlickeringBehaviourCreated')
    }
    
    start(minTime, maxTime){
        super.start(()=> {
            console.log("parito");
            var minTime = minTime;
            var maxTime = maxTime;
            setTimer = (context) => {
                context.room.time.addEvent({
                    delay: Math.floor(Math.random() * (maxTime - minTime)) + minTime,
                    callback: () => {
                        if (this.behaviour.flickering.isRunning) {
                            if (this.isOn) this.turnOff();
                            else if (!this.isOn) this.turnOn();
                            setTimer(this);
                        }
                    },
                    callbackScope: context,
                    repeat: 0
                })
            };
            setTimer(this.component.test);
        });

    }

    stopFlickering(finalState = 'on') {
        super(finaleState, () => {
            this.behaviour.flickering.isRunning = false;
            if (finalState == 'on') this.turnOn();
            else if (finalState == 'off') this.turnOff();
            console.log('stop hard flickering');
        })

    }


}