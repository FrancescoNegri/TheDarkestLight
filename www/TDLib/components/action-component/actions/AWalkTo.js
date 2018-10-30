class AWalkTo extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new AFaceTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        if (this.actor.x < this.target.x) {
                            this.actor.anims.play('walk');
                            //this.actor.anims.play('walkRight');
                            this.actor.body.setVelocity(120);
                        }

                        else
                            if (this.actor.x > this.target.x) {
                                this.actor.anims.play('walk');
                                //this.actor.anims.play('walkLeft');
                                this.actor.body.setVelocity(-120);
                            }
                        console.log('start to walk to ', config.target.x);
                    },
                    () => {
                        this.actor.body.setVelocity(0);
                    },
                    () => {
                        if (Math.abs(this.actor.x - this.target.x) < 1) this.finish();
                    }
                )
            ]
        )
    }
}