/**
 * The behaviours namespace.
 * @namespace TDLib.Components.SpriteBehaviours
 * @since 1.0.0
 */

/**
 * Class representing a component which determines the behaviour of every sprite.
 * @extends TDLib.Components.TDLComponent
 * @memberof TDLib.Components
 * @since 1.0.0
 */
class SpriteBehaviourComponent extends TDLComponent {
    /**
     * Create a new SpriteBehaviourComponent
     * @param {TDLib.Sprites.TDLSprite} gameObject - The sprite which implements the component.
     * @param {string} type - The type of behaviour of the gameObject.
     * @param {Object} [pixelPerfect=null] - If not null enable the pixel perfect pointer hit for the sprite.
     * @param {boolean} [pixelPerfect.alphaTolerance] - The alpha tolerance threshold value.
     */
    constructor(gameObject, type, pixelPerfect) {
        super(gameObject);

        /**
         * A reference to the player in the current room.
         * @type {TDLib.Sprites.Characters.Players.Player}
         * @since 1.0.0
         */
        this.player;
        (typeof this.gameObject.room.player === 'undefined') ? this.player = this.gameObject : this.player = this.gameObject.room.player;

        /**
         * The type of behaviour of the gameObject.
         * @type {string}
         * @since 1.0.0
         */
        this.type = type;

        /**
         * If not null enable the pixel perfect pointer hit for the sprite.
         * @type {string}
         * @since 1.0.0
         */
        this.pixelPerfect = pixelPerfect;

        this._addBehaviours();
    }

    /**
     * Select the appropriate behaviours for the gameObject.
     * @private
     * @since 1.0.0
     */
    _addBehaviours() {
        //Se l'oggetto è osservabile (cioè esaminabile o interagibile) setto il cursore appropriato 
        if (this.type === TDLib.Sprites.Behaviours.Behaviour.EXAMINABLE || this.type === TDLib.Sprites.Behaviours.Behaviour.INTERACTIVE) {
            this.observe = new TDLib.Sprites.Behaviours.Observable(this);
            if (this.type === TDLib.Sprites.Behaviours.Behaviour.EXAMINABLE) this.examine = new TDLib.Sprites.Behaviours.Examinable(this);
            else if (this.type === TDLib.Sprites.Behaviours.Behaviour.INTERACTIVE) this.interact = new TDLib.Sprites.Behaviours.Interactive(this);
        }
    }
}