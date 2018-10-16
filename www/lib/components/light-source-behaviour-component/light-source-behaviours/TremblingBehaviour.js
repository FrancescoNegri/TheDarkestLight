class TremblingBehaviour extends LightSourceBehaviour {
    constructor(component) {
        super('TremblingBehaviour', component)
    }

    start(toRegister = true) {
        super.start(() => {
            console.log('TREMBLING callback start');
        }, toRegister);
    }

    stop(isComplexBehaviour = false) {
        super.stop(() => {
            console.log('TREMBLING callback stop');
        }, isComplexBehaviour);
    }
}