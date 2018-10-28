class ObservableBehaviour extends EntityBehaviour {
    constructor(component) {
        super(component);
    }

    add() {
        super.add();
        this.component.gameObject.on('pointerover', function (event) {
            this.timer = this.component.gameObject.room.time.addEvent({
                delay: ObservableBehaviour.MIN_TIME_TO_OBSERVE * 1000,
                callback: () => {
                    console.log(this.component.gameObject.name + ':', this.component.gameObject.observeText);
                },
                callbackScope: this
            });
        }.bind(this));
        this.component.gameObject.on('pointerout', function (event) {
            this.timer.remove(false);
        }.bind(this));
    }

    /**
	* E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player in secondi!
	*/
    static get MIN_TIME_TO_OBSERVE() {
        return 2;
    }
}