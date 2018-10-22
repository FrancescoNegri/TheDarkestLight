class IdleAction extends Action {
    constructor(component, actor, target, config) {
        super(component, actor, target, config);
    }

    start() {
        super.start(() => {
            console.log('idle action start');
        });
    }

    stop() {
        super.stop(() => {
            console.log('idle stop');
        });
    }
}