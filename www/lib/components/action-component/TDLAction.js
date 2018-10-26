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
        console.log(this.name, 'finished');
        this.invoker.remove();
    }

    abort() {
        this.finishCallback();
        console.log(this.name, 'aborted');
    }

    update(callback = () => { }) {
        //console.log(this.name, 'updating...');
        callback();
    }
}