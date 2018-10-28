/**
 * The namespace of components.
 * @namespace Components
 */

/**
 * Class representing a generic TDLComponent. A TDLComponent extends the members and methods of a TDLSprite which uses it.
 * @memberof Components
 */
class TDLComponent {
    /**
     * Creates a new TDLComponent.
     * @param {TDLSprite} gameObject - The TDLSprite which owns the component.
     */
    constructor(gameObject) {

        /**
         * The name of the component.
         * @type {string}
         */
        this.name = this.constructor.name;

        /**
         * The TDLSprite which owns the component.
         * @type {TDLSprite}
         */
        this.gameObject = gameObject;
    }
}