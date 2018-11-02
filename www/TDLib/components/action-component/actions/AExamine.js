class AExamine extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            [
                new AWalkTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        alert(this.config.target.examineOrInteractText);
                        this.finish();
                    }
                )
            ]
        )
    }
}   