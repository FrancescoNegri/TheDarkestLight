/**
 * The room furnitures namespace.
 * @namespace TDLib.Sprites.Objects.WorldObjects.RoomFurnitures
 * @since 1.0.0
 */

/**
 * Class representing a RoomFurniture.
 * @extends TDLib.Sprites.Objects.WorldObjects.WorldObject
 * @memberof TDLib.Sprites.Objects.WorldObjects.RoomFurnitures
 * @since 1.0.0
 */
class RoomFurniture extends WorldObject {
    constructor(room, x, y, texture, layer) {
        super(room, x, y, texture, layer, true);
    }
}