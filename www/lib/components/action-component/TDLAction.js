//Questa classe deve essere fatta come l'action component, tuttavia contiene in maniera statica anche la classe BaseAction (o BlankAction)
//Aggiungere actor, target, config, ecc....
class TDLAction {
    constructor(invoker) {
        this.invoker = invoker;
        this.name = this.constructor.name;
        this.queue = [];

        this.isPaused = false;
    }

    addQueue(queue) {
        this.queue = queue;
    }

    static get BaseAction() {
        return class BaseAction {
            constructor(invoker, startCallback = () => { }, finishCallback = () => { }, updateCallback = () => { }, resumeCallback = startCallback, pauseCallback = finishCallback) {
                this.invoker = invoker;

                this.startCallback = startCallback;
                this.finishCallback = finishCallback;
                this.updateCallback = updateCallback;
                this.resumeCallback = resumeCallback;
                this.pauseCallback = pauseCallback;

                this.isPaused = false;
            }

            start() {
                this.startCallback(this);
            }

            finish() {
                this.finishCallback(this);
                this.invoker.remove();
            }

            abort() {
                this.finishCallback(this);
            }

            resume() {
                this.isPaused = false;
                this.resumeCallback(this);
            }

            pause() {
                this.pauseCallback(this);
                this.isPaused = true;
            }

            update() {
                this.updateCallback(this);
            }
        }
    }

    abort() {
        console.log(this.name, 'aborted');
        this.queue[0].abort();
    }

    start() {
        console.log(this.name, 'started');
        this.queue[0].start();
    }

    remove() {
        console.log(this.name, 'finished');
        this.queue.shift();
        if (this.queue.length <= 0) this.invoker.remove();
        else this.queue[0].start();
    }

    pause() {
        console.log(this.name, 'paused');
        this.queue[0].pause();
        this.isPaused = true;
    }

    resume() {
        console.log(this.name, 'resumed');
        this.isPaused = false;
        this.queue[0].resume();
    }

    update() {
        this.queue[0].update();
    }
}