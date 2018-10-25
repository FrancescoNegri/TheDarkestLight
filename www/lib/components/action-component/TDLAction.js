class TDLAction {
    constructor() {
        this.start();
    }

    start(callback) {
        callback();
        //this.component.register(this);
    }

    stop(callback) {
        callback();
        //this.component.unregister(this);
    }
}