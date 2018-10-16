class HardFlickeringBehaviour extends LightSourceBehaviour {
    constructor(component) {
        super('HardFlickeringBehaviour', component)
    }

    start(toRegister = true) {
        super.start(() => {
            console.log('Sono la callback e faccio cose');
        }, toRegister);
    }

    stop(isComplexBehaviour = false) {
        super.stop(() => {
            console.log('Stoppo cose, vedo gente.');
        }, isComplexBehaviour);
    }
}