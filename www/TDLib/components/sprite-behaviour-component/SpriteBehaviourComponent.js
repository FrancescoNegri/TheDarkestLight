class SpriteBehaviourComponent extends TDLComponent {
    constructor(gameObject, type) {
        super(gameObject);

        (typeof this.gameObject.room.player === 'undefined') ? this.player = this.gameObject : this.player = this.gameObject.room.player;
        this.interact = {};
        this.examine = {};

        this.type = type;

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

    addBehaviours() {
        //Se l'oggetto è osservabile (cioè esaminabile o interagibile) setto il cursore appropriato 
        if (this.type === SpriteBehaviourComponent.EXAMINABLE || this.type === SpriteBehaviourComponent.INTERACTIVE) {

            this.observe = new ObservableBehaviour(this);

        }
    }
}