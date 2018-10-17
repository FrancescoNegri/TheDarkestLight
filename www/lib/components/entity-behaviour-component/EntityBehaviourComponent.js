class EntityBehaviourComponent extends TDLComponent {
    constructor(gameObject) {
        super(gameObject);

        this.observe = {};
        this.interact = {};
        this.examine = {};

        this.setBehaviour();
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

    /**
	* E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player in secondi!
	*/
    static get MIN_TIME_TO_OBSERVE() {
        return 2;
    }

    setBehaviour() {
        if (this.gameObject.behaviourType === EntityBehaviourComponent.EXAMINABLE || this.gameObject.behaviourType === EntityBehaviourComponent.INTERACTIVE) {

            if (this.gameObject.behaviourType === EntityBehaviourComponent.EXAMINABLE) this.gameObject.setInteractive({ cursor: 'url(assets/Cursors/CursorExamine.cur), pointer' });
            else this.gameObject.setInteractive({ cursor: 'url(assets/Cursors/CursorInteract.cur), pointer' });

            this.gameObject.on('pointerover', function (event) {
                this.observe.timer = this.gameObject.room.time.addEvent({
                    delay: EntityBehaviourComponent.MIN_TIME_TO_OBSERVE * 1000,
                    callback: () => {
                        console.log(this.gameObject.name + ':', this.gameObject.observeText);
                    },
                    callbackScope: this
                });
            }.bind(this));
            this.gameObject.on('pointerout', function (event) {
                this.observe.timer.remove(false);
            }.bind(this));

        }
    }
}