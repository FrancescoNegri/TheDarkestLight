class ARunTo extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new AFaceTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        if (Math.abs(this.actor.x - this.target.x) > AWalkTo.MICRO_MOVEMENT_RADIUS) {
                            this.actor.anims.play('run');
                            //this.actor.anims.play('runRight');
                            this.actor.body.setVelocity(ARunTo.RUN_VELOCITY);
                        }

                        else
                            if (this.actor.x > this.target.x) {
                                this.actor.anims.play('run');
                                //this.actor.anims.play('runleft');
                                this.actor.body.setVelocity(-ARunTo.RUN_VELOCITY);
                            }
                        console.log('start to run to ', config.target.x);
                    },
                    () => {
                        this.actor.body.setVelocity(0);
                    },
                    () => {
                        if ((this.actor.x - this.target.x)*this.actor.body.velocity.x >0) this.finish();
                    }
                )
            ]
        )
    }

    static get RUN_VELOCITY() {
        return 240;
    }
}