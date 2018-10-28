/**
 * Class representing a TDLCharacter.
 * @extends TDLSprite
 */
class TDLCharacter extends TDLSprite {
    /**
     * 
     * @param {Room} room - The room where the character is created.
     * @param {number} x - The x coordinate of the character.
     * @param {number} y - The y coordinate of the character.
     * @param {string} texture - The character's graphic.
     * @param {string} layer - The character's layer.
     */
    constructor(room, x, y, texture, layer) {
        super(room, x, y, texture, layer, true, EntityBehaviourComponent.INTERACTIVE);

        /**
         * The ActionComponent for this character.
         * @type {Components.ActionComponent}
         */
        this.actions = new ActionComponent(this);
    }
}