class AInteract extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            [
                new AWalkTo(this, this.actor, this.config),
                this.target.behaviour.interact.getAction(this)
            ]
        )
    }
}