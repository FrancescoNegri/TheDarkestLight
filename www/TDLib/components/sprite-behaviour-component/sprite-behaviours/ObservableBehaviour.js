class ObservableBehaviour extends SpriteBehaviour {
    constructor(component) {
        super(component);

        this._timer;
    }

    /**
    * E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player in secondi!
    */
    static get DEFAULT_MIN_TIME_TO_OBSERVE() {
        return 1 * 1000;
    }

    add() {
        super.add();

        this.gameObject.on('pointerover', function (pointer) {
            this.cursors.setCursor(this.gameObject);

            this._timer = this.gameObject.room.time.addEvent({
                delay: ObservableBehaviour.DEFAULT_MIN_TIME_TO_OBSERVE,
                callback: () => {
                    if (this.gameObject != this.room.player && !this.room.player.isBlocked) this.room.player.actions.add(TDLib.Actions.Observe, { target: this.gameObject });
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
     * Generate a proper action according to the behaviour and the gameObject settings.
     * @return {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    getAction(invoker) {
        return new TDLib.Actions.Action.BaseAction(
            invoker,
            () => {
                //Fare i controlli su quanta luce c'è nella stanza!
                if (this.checkLight(this.gameObject.minLightLevelToObserve)) console.log(this.gameObject.observeText);
                else console.log(this.gameObject.noLightObserveText);
                invoker.finish();
            }
        );
    }
}