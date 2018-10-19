class EntityBehaviourComponent extends TDLComponent {
    constructor(gameObject) {
        super(gameObject);

        (typeof this.gameObject.room.player === 'undefined') ? this.player = this.gameObject : this.player = this.gameObject.room.player;
        this.interact = {};
        this.examine = {};

        this.addBehaviours();
    }

    static get INERT() {
        return 'INERT';
    }
    static get EXAMINABLE() {
        return 'EXAMINABLE';
    }
    static get INTERACTIVE() {
        return 'INTERACTIVE';
    }
    static get TALKABLE() {
        return 'TALKABLE';
    }
    static get INVENTORY() {
        return 'INVENTORY';
    }

    /**
	* E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player in secondi!
	*/
    static get MIN_TIME_TO_OBSERVE() {
        return 2;
    }

    //RIFARE TUTTI I CURSORI: SONO TROPPO BLOCCATI

    addBehaviours() {
        //Se l'oggetto è osservabile (cioè esaminabile o interagibile) setto il cursore appropriato 
        if (this.gameObject.behaviourType === EntityBehaviourComponent.EXAMINABLE || this.gameObject.behaviourType === EntityBehaviourComponent.INTERACTIVE) {

            this.observe = new ObservableBehaviour(this);

        }
    }
}