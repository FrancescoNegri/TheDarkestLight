// da cambiare e mettere tutta dentro l'AWalkTo e fare un Move to che distingua che azioni chiamare?
class ARunTo extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            [
                new AFaceTo(this, this.actor, this.config),
                new TDLAction.BaseAction(
                    this,
                    () => {
                        if (Math.abs(this.actor.x - this.target.x) > ARunTo.MICRO_MOVEMENT_RADIUS) {
                            if (this.actor.x < this.target.x) {
                                this.actor.anims.play('run');
                                //this.actor.anims.play('runRight');
                                this.actor.body.setVelocity(ARunTo.RUN_VELOCITY);
                            }

                            else
                                if (this.actor.x > this.target.x) {
                                    this.actor.anims.play('run');
                                    //this.actor.anims.play('runLeft');
                                    this.actor.body.setVelocity(-ARunTo.RUN_VELOCITY);
                                }
                            console.log('start to run to ', config.target.x);
                        }
                        else {
                            this.finish();
                        }
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

    static get MICRO_MOVEMENT_RADIUS() {
        return 20;
    }
}