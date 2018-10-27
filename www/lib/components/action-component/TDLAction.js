//Eventualmente è possbile a questo punto creare una funzione che permetta di aggiungere in coda alla queue nuove azioni (dopo un controllo)
class TDLAction {
    constructor(invoker, actor, config = { }) {
        this.invoker = invoker;
        this.name = this.constructor.name;

        this.actor = actor;
        this.target = config.target;
        this.config = config;

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
                this.startCallback();
            }

            finish() {
                this.finishCallback();
                this.invoker.remove();
            }

            abort() {
                this.finishCallback();
            }

            resume() {
                this.isPaused = false;
                this.resumeCallback();
            }

            pause() {
                this.pauseCallback();
                this.isPaused = true;
            }

            update() {
                this.updateCallback();
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

    finish() {
        this.queue[0].finish();
    }

    remove() {
        this.queue.shift();
        if (this.queue.length <= 0) {
            console.log(this.name, 'finished');
            this.invoker.remove();
        }
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