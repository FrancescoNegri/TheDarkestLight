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

    /**
     * Inert behaviour.
     * @type {string}
     * @since 1.0.0
     */
    static get INERT() {
        return 'INERT';
    }

    /**
     * Examinable behaviour.
     * @type {string}
     * @since 1.0.0
     */
    static get EXAMINABLE() {
        return 'EXAMINABLE';
    }

    /**
     * Interactive behaviour.
     * @type {string}
     * @since 1.0.0
     */
    static get INTERACTIVE() {
        return 'INTERACTIVE';
    }

    /**
     * Talkable behaviour.
     * @type {string}
     * @since 1.0.0
     */
    static get TALKABLE() {
        return 'TALKABLE';
    }

    /**
     * Inventory interactive behaviour.
     * @type {string}
     * @since 1.0.0
     */
    static get INVENTORY() {
        return 'INVENTORY';
    }

    static get DEFAULT_MIN_LIGHT_LEVEL_TO_OBSERVE() {
        return 0.5;
    }

    static get DEFAULT_OBSERVE_TEXT() {
        return 'Observe default text';
    }

    static get DEFAULT_NO_LIGHT_OBSERVE_TEXT() {
        return 'NoLightObserve default text';
    }

    static get DEFAULT_MIN_LIGHT_LEVEL_TO_EXAMINE_OR_INTERACT() {
        return 0.4;
    }

    static get DEFAULT_EXAMINE_OR_INTERACT_TEXT() {
        return 'ExamineOrInteract default text';
    }

    static get DEFAULT_NO_LIGHT_EXAMINE_OR_INTERACT_TEXT() {
        return 'NoLightExamineOrInteract default text';
    }
}