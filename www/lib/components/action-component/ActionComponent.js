class ActionComponent extends TDLComponent {
    constructor(actor) {
        super(actor);

        this.actor = actor;

        //Posizione 0: azione in esecuzione
        this.queue = ['prova0', 'prova1'];

        /*
        3 possibili comportamenti:
            - default: la queue si svuota, l'azione in 0 viene abortita e inizia la nuova azione
            - case 1: la nuova azione viene messa in fila nel primo posto libero in queue
            - case 2: metti in pausa l'azione 0 e inserisci la nuova azione al posto 0 (tutto scala indietro di una posizione)
        */
    }

    add(action, config) {
        let newAction = new action(config);
        this.queue.unshift(newAction);

        console.log(this.queue);
        return newAction;
    }
}