class AWalkTo extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new AFaceTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        if (Math.abs(this.actor.x - this.target.x) > AWalkTo.MICRO_MOVEMENT_RADIUS) {
                            if (this.actor.x < this.target.x) {
                                this.actor.anims.play('walk');
                                //this.actor.anims.play('walkRight');
                                this.actor.body.setVelocity(AWalkTo.WALK_VELOCITY);
                            }

                            else
                                if (this.actor.x > this.target.x) {
                                    this.actor.anims.play('walk');
                                    //this.actor.anims.play('walkLeft');
                                    this.actor.body.setVelocity(-AWalkTo.WALK_VELOCITY);
                                }
                            console.log('start to walk to ', config.target.x);
                        }
                        else {
                            this.finish();
                        }
                    },
                    () => {
                        this.actor.body.setVelocity(0);
                    },
                    () => {
                        if ((this.actor.x - this.target.x)*this.actor.body.velocity.x >0) this.finish();                    }
                )
            ]
        )
    }

    static get WALK_VELOCITY() {
        return 120;
    }

    static get MICRO_MOVEMENT_RADIUS() {
        return 20;
    }

}