class AIdle extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    () => { 
                        this.actor.body.setVelocity(0);
                        this.actor.anims.play('idle');
                    }
                )
            ]
        );
    }
}