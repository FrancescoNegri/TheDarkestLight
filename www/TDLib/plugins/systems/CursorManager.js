class CursorManager extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);
    }

    static CURSOR_SCENE() {
        return class CursorScene extends Phaser.Scene {
            constructor() {
                super(CursorManager.CURSOR_SCENE_KEY);

                this.cursor;
            }

            preload() {
                this.load.image(CursorManager.EXAMINABLE_CURSOR, 'assets/Cursors/CursorExamine.png');
                this.load.image(CursorManager.HOLD_CURSOR, 'assets/Cursors/CursorHold.png');
                this.load.image(CursorManager.INTERACTIVE_CURSOR, 'assets/Cursors/CursorInteract.png');
                this.load.image(CursorManager.DEFAULT_CURSOR, 'assets/Cursors/CursorMove.png');
                this.load.image(CursorManager.TALKABLE_CURSOR, 'assets/Cursors/CursorTalk.png');
                this.load.image(CursorManager.CHOICE_CURSOR, 'assets/Cursors/CursorChoice.png');
                this.load.image(CursorManager.CHOICE_PRESSED_CURSOR, 'assets/Cursors/CursorChoicePressed.png');
            }

            create() {
                this.input.setDefaultCursor('none');
                this.cursor = this.add.image(0, 0, CursorManager.DEFAULT_CURSOR).setOrigin(0.4, 0.33).setDepth(100000);
            }

            update() {
                this.cursor.x = this.input.activePointer.x;
                this.cursor.y = this.input.activePointer.y;
            }

        }
    }

    static get CURSOR_SCENE_KEY() {
        return 'CursorScene';
    }

    static get DEFAULT_CURSOR() {
        return 'cursorMove';
    }
    static get EXAMINABLE_CURSOR() {
        return 'cursorExamine';
    }
    static get INTERACTIVE_CURSOR() {
        return 'cursorInteract';
    }
    static get HOLD_CURSOR() {
        return 'cursorHold';
    }
    static get TALKABLE_CURSOR() {
        return 'cursorTalk';
    }
    static get CHOICE_CURSOR() {
        return 'cursorChoice';
    }
    static get CHOICE_PRESSED_CURSOR() {
        return 'cursorChoicePressed';
    }

    configure(sceneManager) {
        this.sceneManager = sceneManager;
        this.cursorScene = this.sceneManager.add(CursorManager.CURSOR_SCENE_KEY, CursorManager.CURSOR_SCENE(), true);
    }

    pointerDown() {
        console.log(this.cursorScene.cursor.texture);
    }

    setCursor(target = { behaviour: { type: SpriteBehaviourComponent.INERT } }) {
        switch (target.behaviour.type) {
            case SpriteBehaviourComponent.INERT: {
                this.cursorScene.cursor.setTexture(CursorManager.DEFAULT_CURSOR).setOrigin(0.4, 0.33);
            }
                break;

            case SpriteBehaviourComponent.EXAMINABLE: {
                this.cursorScene.cursor.setTexture(CursorManager.EXAMINABLE_CURSOR).setOrigin(0.33, 0.29);
            }
                break;

            case SpriteBehaviourComponent.INTERACTIVE: {
                this.cursorScene.cursor.setTexture(CursorManager.INTERACTIVE_CURSOR).setOrigin(0.4, 0.33);
            }
                break;

            case SpriteBehaviourComponent.TALKABLE: {
                this.cursorScene.cursor.setTexture(CursorManager.TALKABLE_CURSOR);
            }
                break;
        }
    }
}