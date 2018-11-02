class ATest extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            new TDLAction.BaseAction(
                this,
                () => {
                    this.startingX = this.actor.x;
                    if (this.actor.facing == TDLCharacter.FACING().RIGHT) this.actor.body.setVelocity(120);
                    else if (this.actor.facing == TDLCharacter.FACING().LEFT) this.actor.body.setVelocity(-120);
                    this.actor.anims.play('walk');
                },
                () => {
                    this.actor.body.setVelocity(0);
                    this.actor.anims.play('idle');
                },
                () => {
                    if (this.actor.facing == TDLCharacter.FACING().RIGHT) {
                        if (this.actor.x >= this.startingX + 350) this.finish();
                    }
                    else if (this.actor.facing == TDLCharacter.FACING().LEFT) {
                        if (this.actor.x <= this.startingX - 350) this.finish();
                    }
                },
                () => { }
            )
        );
    }
}