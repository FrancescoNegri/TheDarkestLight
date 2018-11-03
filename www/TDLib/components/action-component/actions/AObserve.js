class AObserve extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            [
                new AFaceTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        console.log(this.config.target.observeText);
                        this.finish();
                    }
                )
            ]
        )
    }
}