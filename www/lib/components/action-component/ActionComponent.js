class ActionComponent extends TDLComponent {
    constructor(actor) {
        super(actor);

        this.actor = actor;

        this.defaultAction = new AIdle();
        this.queue = [this.defaultAction];
        this.queue[0].start();
    }

    static get DEFAULT_MODE() {
        return 0;
    }

    static get QUEUE_MODE() {
        return 1;
    }

    static get PAUSE_MODE() {
        return 2;
    }

    add(action, config = null, mode = ActionComponent.DEFAULT_MODE) {
        /*
        3 possibili comportamenti:
            - default: la queue si svuota, l'azione in 0 viene abortita e inizia la nuova azione
            - case 1: la nuova azione viene messa in fila nel primo posto libero in queue
            - case 2: metti in pausa l'azione 0 e inserisci la nuova azione al posto 0 (tutto scala indietro di una posizione)
        */
        let newAction = new action(config);

        switch (mode) {
            case ActionComponent.DEFAULT_MODE: {
                this.queue[0].abort();
                this.queue = [];
                this.queue.push(newAction);
                this.queue[0].start();
            };
                break;

            case ActionComponent.QUEUE_MODE: {
                this.queue.push(newAction);
            };
                break;

            case ActionComponent.PAUSE_MODE: {
                console.log('Faccio il pause di action in [0]');
                this.queue.unshift(newAction);
                this.queue[0].start();
            };
                break;
        }
        

        console.log(this.queue);
        return newAction;
    }

    remove() {
        this.queue.shift();
        if (this.queue.length == 0) this.queue.push(this.defaultAction);
        this.queue[0].start();
    }

    update() {
        this.queue[0].update();
    }
}