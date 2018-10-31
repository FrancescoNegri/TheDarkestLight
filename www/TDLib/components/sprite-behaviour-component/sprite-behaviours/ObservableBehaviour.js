class ObservableBehaviour extends SpriteBehaviour {
    constructor(component) {
        super(component);

        this._timer;
    }

    add() {
        super.add();

        this.gameObject.on('pointerover', function (pointer) {
            this.cursors.setCursor(this.gameObject);

            this._timer = this.gameObject.room.time.addEvent({
                delay: this.gameObject.minTimeToObserve,
                callback: () => {
                    if (this.gameObject != this.room.player && !this.room.player.isBlocked) this.room.player.actions.add(AObserve, { target: this.gameObject });
                },
                callbackScope: this
            });
        }.bind(this));

        this.gameObject.on('pointerout', function (pointer) {
            this._timer.remove(false);
            this.cursors.setCursor();
        }.bind(this));
    }

    /**
     * Delete the timer which starts the AObserve action.
     */
    abort() {
        this._timer.remove(false);
    }

    /**
	* E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player in secondi!
	*/
    static get MIN_TIME_TO_OBSERVE() {
        return 1.5;
    }
}