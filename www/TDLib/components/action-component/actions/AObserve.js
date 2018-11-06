class AObserve extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            [
                new AFaceTo(this, this.actor, this.config),
                this.target.behaviour.observe.getAction(this)
            ]
        )
    }
}