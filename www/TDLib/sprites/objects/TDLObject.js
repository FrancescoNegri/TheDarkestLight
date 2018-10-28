/**
 * The objects namespace.
 * @namespace TDLib.Sprites.Objects
 */

/**
 * Class representing a TDLObject.
 * @extends TDLib.Sprites.TDLSprite
 * @memberof TDLib.Sprites.Objects
 */
class TDLObject extends TDLSprite {
    /**
     * Create a new TDLObject.
     * @param {Room} room - The room where the object is created.
     * @param {number} x - The x coordinate of the object.
     * @param {number} y - The y coordinate of the object.
     * @param {string} texture - The object's graphic.
     * @param {string} layer - The object's layer.
     * @param {*} hasBody - Specify if the object has a body and is subjected to physics.
     */
    constructor(room, x, y, texture, layer, hasBody) {
        super(...arguments, EntityBehaviourComponent.EXAMINABLE);
    }
}