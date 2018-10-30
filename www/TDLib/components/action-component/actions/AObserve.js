class AObserve extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new AFaceTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        alert(this.config.target.observeText);
                        this.finish();
                    }
                )
            ]
        )
    }
}