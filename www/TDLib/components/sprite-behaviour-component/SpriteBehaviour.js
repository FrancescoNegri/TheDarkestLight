/**
 * Class representing the behaviour of a sprite.
 * @memberof TDLib.Components.SpriteBehaviours
 * @since 1.0.0
 */
class SpriteBehaviour {
    /**
     * Create a SpriteBehaviour.
     * @param {TDLib.Components.SpriteBehaviourComponent} component - The component which has invoked the behaviour.
     */
    constructor(component) {
        /**
         * The component which has invoked the behaviour.
         * @type {TDLib.Components.SpriteBehaviourComponent}
         * @since 1.0.0
         */
        this.component = component;

        /**
         * The global cursor manager.
         * @type {TDLib.Plugins.GlobalPlugins.CursorManager}
         * @since 1.0.0
         */
        this.cursors = this.component.gameObject.room.cursors;

        /**
         * The sprite which has invoked the behaviour.
         * @type {TDLib.Sprites.TDLSprite}
         * @since 1.0.0
         */
        this.gameObject = this.component.gameObject;

        /**
         * The room where the gameObject lives.
         * @type {TDLib.Rooms.TDLRoom}
         * @since 1.0.0
         */
        this.room = this.component.gameObject.room;

        this.add();
    }

    /**
     * Set the gameObject as interactive.
     * @since 1.0.0
     */
    add() {
        this.component.gameObject.setInteractive();
    }

    /**
     * Generate a proper action according to the behaviour and the gameObject settings.
     * @return {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    getAction(invoker) {
        return new TDLAction.BaseAction(
            invoker,
            () => {
                console.log('Sono una generica action dei behaviour');
                invoker.finish();
            }
        );
    }
}