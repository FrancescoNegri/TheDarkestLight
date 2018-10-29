class ObservableBehaviour extends SpriteBehaviour {
    constructor(component) {
        super(component);
    }

    add() {
        super.add();
        this.gameObject.on('pointerover', function (pointer) {
            this.cursors.setCursor(this.gameObject);

            this.timer = this.gameObject.room.time.addEvent({
                delay: ObservableBehaviour.MIN_TIME_TO_OBSERVE * 1000,
                callback: () => {
                    this.room.player.actions.add(AFaceTo, {target: this.gameObject});
                },
                callbackScope: this
            });
        }.bind(this));
        this.gameObject.on('pointerout', function (pointer) {
            this.timer.remove(false);

            this.cursors.setCursor();
        }.bind(this));
    }

    /**
	* E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player in secondi!
	*/
    static get MIN_TIME_TO_OBSERVE() {
        return 2;
    }
}