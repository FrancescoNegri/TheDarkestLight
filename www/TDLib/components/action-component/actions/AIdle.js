/**
 * Class representing the idle action.
 * @extends TDLib.Components.Actions.TDLAction
 * @memberof TDLib.Components.Actions
 */
class AIdle extends TDLAction {
    /**
     * Start a new idle action.
     * @param {Components.ActionComponent|Components.Actions.TDLAction} invoker - The invoker of the action.
     * @param {TDLSprite} actor - The actor who performs the action.
     * @param {Object} config - The config object for the action.
     * @param {Object} config.target - The target of the action.
     * @param {number} config.target.x - The x of the target of the action.
     */
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addActions(
            new TDLAction.BaseAction(
                this,
                () => {
                    this.actor.body.setVelocity(0);
                    switch (this.actor.facing) {

                        case TDLCharacter.FACING().LEFT: {
                            this.actor.anims.play('idle');
                            //this.actor.anims.play('idleLeft');
                            console.log('start idleLeft');
                        }
                            break;

                        case TDLCharacter.FACING().RIGHT: {
                            this.actor.anims.play('idle');
                            //this.actor.anims.play('idleRight');
                            console.log('start idleRight');
                        }
                            break;

                        //possibili altri casi di facing (es girato di spalle o da davanti)
                    }
                }
            )
        );
    }
}