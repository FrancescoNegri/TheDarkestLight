class ATest extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    () => {
                        this.startingX = this.actor.x;
                        this.actor.body.setVelocity(120);
                        this.actor.anims.play('walk');
                    },
                    () => {
                        this.actor.body.setVelocity(0);
                        this.actor.anims.play('idle');
                    },
                    () => {
                        if (this.actor.x >= this.startingX + 350) this.finish();
                    },
                    () => { }
                )
            ]
        );
    }
}