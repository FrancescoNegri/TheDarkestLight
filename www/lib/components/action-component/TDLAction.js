class TDLAction {
    constructor(invoker, startCallback = () => { }, finishCallback = () => { }, resumeCallback = startCallback, pauseCallback = finishCallback) {
        this.invoker = invoker;
        this.name = this.constructor.name;

        this.startCallback = startCallback;
        this.finishCallback = finishCallback;
        this.resumeCallback = resumeCallback;
        this.pauseCallback = pauseCallback;

        this.isPaused = false;
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

    resume() {
        this.isPaused = false;
        this.resumeCallback();
    }

    pause() {
        this.pauseCallback();
        this.isPaused = true;
    }

    update(callback = () => { }) {
        //console.log(this.name, 'updating...');
        callback();
    }
}