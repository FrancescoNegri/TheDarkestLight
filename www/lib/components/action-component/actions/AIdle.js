class AIdle extends TDLAction {
    constructor() {
        super();
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