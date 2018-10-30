/**
 * Class representing the cursor manager, able to select always the correct graphic for the cursor and to handle pointer events.
 * @extends Phaser.Plugins.BasePlugin
 * @memberof TDLib.Plugins.GlobalPlugins
 */
class CursorManager extends Phaser.Plugins.BasePlugin {
    /**
     * Create a new CursorManager.
     * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the plugin manager.
     */
    constructor(pluginManager) {
        super(pluginManager);

        /**
         * The scene containing the cursor.
         * @type {CursorManager.CURSOR_SCENE}
         */
        this.cursorScene;

        /**
         * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
         * @type {Phaser.Scenes.SceneManager}
         */
        this.sceneManager;

        /**
         * Save the last sprite who called the function setCursor().
         * @type {TDLib.Sprites.TDLSprite}
         */
        this.lastTarget;
    }

    /**
     * It's a Phaser.Scene representing the scene containing the cursor which will be put on the rooms level.
     * @type {Phaser.Scene}
     * @private
     */
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

    /**
     * The key of the scene containing the cursor.
     * @type {string}
     */
    static get CURSOR_SCENE_KEY() {
        return 'CursorScene';
    }

    /**
     * The key of the inert cursor.
     * @type {string}
     */
    static get DEFAULT_CURSOR() {
        return 'cursorMove';
    }

    /**
     * The key of the examine cursor.
     * @type {string}
     */
    static get EXAMINABLE_CURSOR() {
        return 'cursorExamine';
    }

    /**
     * The key of the interact cursor.
     * @type {string}
     */
    static get INTERACTIVE_CURSOR() {
        return 'cursorInteract';
    }

    /**
     * The key of the hold cursor.
     * @type {string}
     */
    static get HOLD_CURSOR() {
        return 'cursorHold';
    }

    /**
     * The key of the talk cursor.
     * @type {string}
     */
    static get TALKABLE_CURSOR() {
        return 'cursorTalk';
    }

    /**
     * The key of the choice cursor.
     * @type {string}
     */
    static get CHOICE_CURSOR() {
        return 'cursorChoice';
    }

    /**
     * The key of the choice pressed cursor.
     * @type {string}
     */
    static get CHOICE_PRESSED_CURSOR() {
        return 'cursorChoicePressed';
    }

    /**
     * Configure the cursor manager.
     * @param {Phaser.Scenes.SceneManager} sceneManager - The Scene Manager is a Game level system, responsible for creating, processing and updating all of the Scenes in a Game instance.
     */
    configure(sceneManager) {
        this.sceneManager = sceneManager;
        this.cursorScene = this.sceneManager.add(CursorManager.CURSOR_SCENE_KEY, CursorManager.CURSOR_SCENE(), true);
    }

    /**
     * Handle the pointer down event.
     * @param {TDLib.Sprites.Characters.TDLCharacter} player - The current player.
     */
    pointerDown(player) {
        if (!player.isBlocked) {
            switch (this.cursorScene.cursor.texture.key) {
                case CursorManager.DEFAULT_CURSOR: {
                    player.actions.add(AWalkTo, { target: { x: player.room.input.activePointer.worldX } });
                }
                    break;

                case CursorManager.EXAMINABLE_CURSOR: {
                    player.actions.add(AExamine, { target: this.lastTarget });
                }
                    break;

                case CursorManager.INTERACTIVE_CURSOR: {
                    player.actions.add(AInteract, { target: this.lastTarget });
                }
                    break;

                case CursorManager.TALKABLE_CURSOR: {
                    player.actions.add(ATalkTo, { target: this.lastTarget });
                }
                    break;
            }
        }
    }

    /**
     * Set the correct cursor for the target selected.
     * @param {Object} target - The target of the pointer.sceneManager
     * @param {TDLib.Components.ActionComponent} target.behaviour - The SpriteBehaviourComponent of the target.
     * @param {string} [target.behaviour.type=SpriteBehaviourComponent.INERT] - The type of the sprite behaviour for this target.
     */
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

        this.lastTarget = target;
    }

    /**
     * Show the cursor.
     */
    showCursor() {
        this.cursorScene.cursor.setVisible(true);
    }

    /**
     * Hide the cursor.
     */
    hideCursor() {
        this.cursorScene.cursor.setVisible(false);
    }
}