class AFaceTo extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            new TDLAction.BaseAction(
                this,
                () => {
                    if (Math.abs(this.actor.x - this.target.x) > AFaceTo.MICRO_MOVEMENT_RADIUS) {
                        if (this.actor.facing == TDLib.RIGHT) {
                            if (this.actor.x > this.target.x) {
                                this.actor.facing = TDLib.LEFT;
                                this.actor.setFlipX(true);
                                //this.actor.anims.play('idleLeft');
                            }
                        }
                        else if (this.actor.facing == TDLib.LEFT) {
                            if (this.actor.x < this.target.x) {
                                this.actor.facing = TDLib.RIGHT;
                                this.actor.setFlipX(false);
                                //this.actor.anims.play('idleRight');
                            }
                        }
                    }
                    this.finish();
                }
            )
        );
    }

    static get MICRO_MOVEMENT_RADIUS() {
        return 6;
    }
}