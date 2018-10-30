class AFaceTo extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    () => {
                        if (this.actor.facing == TDLCharacter.FACING().RIGHT) {
                            if (this.actor.x > this.target.x) {
                                this.actor.facing = TDLCharacter.FACING().LEFT;
                                this.actor.setFlipX(true);
                                //this.actor.anims.play('idleLeft');
                            }
                        }
                        else if (this.actor.facing == TDLCharacter.FACING().LEFT) {
                            if (this.actor.x < this.target.x) {
                                this.actor.facing = TDLCharacter.FACING().RIGHT;
                                this.actor.setFlipX(false);
                                //this.actor.anims.play('idleRight');
                            }
                        }
                        this.finish();
                    }
                )
            ]
        );
    }
}