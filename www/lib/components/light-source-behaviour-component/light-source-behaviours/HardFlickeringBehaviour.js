class HardFlickeringBehaviour extends LightSourceBehaviour {
    constructor(component) {
        super('HardFlickeringBehaviour', component)
    }

    start() {
        super.start(() => {
            console.log('Sono la callback e faccio cose');
        });
    }

    stop() {
        super.stop(() => {
            console.log('Stoppo cose, vedo gente.');
        });
    }
}