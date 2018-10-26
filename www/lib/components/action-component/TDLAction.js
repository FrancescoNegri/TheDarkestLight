class TDLAction {
    constructor(invoker, startCallback, finishCallback) {
        this.invoker = invoker;
        this.name = this.constructor.name;

        this.startCallback = startCallback;
        this.finishCallback = finishCallback;
    }

    start() {
        console.log(this.name, 'started');
        this.startCallback();
    }

    finish() {
        this.finishCallback();
        this.invoker.remove();
        console.log(this.name, 'finished');
    }

    abort() {
        this.finishCallback();
        console.log(this.name, 'aborted');
    }

    update() {
        console.log(this.name, 'updating...');
    }
}