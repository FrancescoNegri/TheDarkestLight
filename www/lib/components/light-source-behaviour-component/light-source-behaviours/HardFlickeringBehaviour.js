class HardFlickeringBehaviour extends LightSourceBehaviour {
    constructor(component, calledByBehaviour = null) {
        super( component, calledByBehaviour);
    }

    start() {
        super.start(() => {
            console.log('HARDFLICKERING start');
        });
    }

    stop() {
        super.stop(() => {
            console.log('HARDFLICKERING stop');
        });
    }
}