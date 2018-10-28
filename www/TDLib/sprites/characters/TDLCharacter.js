/**
 * The characters namespace.
 * @namespace TDLib.Sprites.Characters
 */

/**
 * Class representing a TDLCharacter.
 * @extends TDLib.Sprites.TDLSprite
 * @memberof TDLib.Sprites.Characters
 */
class TDLCharacter extends TDLSprite {
    /**
     * Create a new TDLCharacter.
     * @param {Room} room - The room where the character is created.
     * @param {number} x - The x coordinate of the character.
     * @param {number} y - The y coordinate of the character.
     * @param {string} texture - The character's graphic.
     * @param {string} layer - The character's layer.
     */
    constructor(room, x, y, texture, layer) {
        super(...arguments, true, EntityBehaviourComponent.INTERACTIVE);

        /**
         * The ActionComponent for this character.
         * @type {Components.ActionComponent}
         */
        this.actions = new ActionComponent(this);

        /**
         * The facing of the character.
         * @type {TDLCharacter.FACING}
         */
        this.facing = TDLCharacter.FACING().RIGHT;
    }

    static FACING() {
        return {
            RIGHT: 'facing_right',
            LEFT: 'facing_left'
        }
    }

    create() {
        super.create();

        this.room.input.on('pointerdown', function (pointer) {
            if (pointer.camera == this.room.cameras.main) this.actions.add(AFaceTo, { target: { x: pointer.worldX } });
        }, this);
    }

    update() {
        super.update();
    }
}