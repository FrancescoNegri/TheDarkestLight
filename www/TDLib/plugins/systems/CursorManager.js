class CursorManager extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        this.current = CursorManager.DEFAULT_CURSOR;
    }

    static get DEFAULT_CURSOR() {
        return 0;
    }
    static get EXAMINABLE_CURSOR() {
        return 1;
    }
    static get INTERACTIVE_CURSOR() {
        return 2;
    }

    pointerDown() {
        console.log(this.current);
    }

    setCursor(target = { behaviour: { type: SpriteBehaviourComponent.INERT } }) {
        this.current = target.behaviour.type;
        console.log('Cursor set');
    }
}