/**
 * The Darkest Lib.
 * @namespace TDLib
 * @since 1.0.0
 */

/**
 * The actions namespace.
 * @namespace TDLib.Sprites
 * @since 1.0.0
 */

/**
 * Class representing a TDLSprite.
 * @extends Phaser.Physics.Arcade.Sprite
 * @memberof TDLib.Sprites
 * @since 1.0.0
 */
class TDLSprite extends Phaser.Physics.Arcade.Sprite {
    /**
     * Create a TDLSprite.
     * @param {TDLib.Rooms.TDLRoom} room - The room where the sprite is created.
     * @param {number} x - The sprite x coordinate.
	 * @param {number} y - The sprite y coordinate.
	 * @param {string} texture - The graphic of the sprite.
     * @param {string} [layer=null] - The key of the layer which will contain the sprite.
     * @param {boolean} [hasBody=true] - Specify if the sprite has physics.
     * @param {string} [behaviourType=SpriteBehaviourComponent.INERT] - Specify the behaviour of the sprite.
	 * @param {string} [observeText] - The text which appears when observing the sprite.
	 * @param {string} [examineOrInteractText] -  The text which appears when examine or interact with the sprite.
	 * @param {string} [blockExamineText=null] - If not null it's the blocking text which appears the first time the sprite is examined.
	 * @param {string} [noLightObserveText] -  The text which appears when observing the sprite when the diffused light is not sufficient.
	 * @param {string} [noLightExamineOrInteractText] - The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
	 * @param {number} [examineOrInteractOffsetX=0] - The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
	 * @param {number} [examineOrInteractThresholdRadius=0] - The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
	 * @param {number} [minLightLevelToExamineOrInteract=???] - The minimum value of diffused light to examine or interact with the sprite.
	 * @param {number} [minLightLevelToObserve=???] - The minimum value of diffused light to observe the sprite.
	 * @param {boolean} [precisePosition=false] - Specify if to examine or interact with the sprite it's required to be precisely at the examineOrInteractPoint. (Probably not needed)
	 */
    constructor(
        room,
        x, y,
        texture,
        layer = null,
        hasBody = true,
        behaviourType = EntityBehaviourComponent.INERT,
        observeText = 'Observe default text',
        examineOrInteractText = 'ExamineOrInteract default text',
        blockExamineText = null,
        noLightObserveText = 'NoLightObserve default text',
        noLightExamineOrInteractText = 'NoLightExamineOrInteract default text',
        examineOrInteractOffsetX = 0,
        examineOrInteractThresholdRadius = 0,
        minLightLevelToExamineOrInteract = 0.4,
        minLightLevelToObserve = 0.5

    ) {
        super(room, x, y, texture);

        /**
         * The room where the sprite is created.
         * @type {TDLib.Rooms.TDLRoom}
         * @since 1.0.0
         */
        this.room = room;

        /**
         * The name of the sprite, to map it in the room. Usually it's obtained by Tiled.
         * @type {string}
         * @since 1.0.0
         */
        this.name;

        /**
         * The unique key of the sprite, composed by the sprite type and a 4 digits random integer number.
         * @type {string}
         * @since 1.0.0
         */
        this.key = this.constructor.name + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

        /**
         * The type of the sprite.
         * @type {string}
         * @since 1.0.0
         */
        this.type = this.constructor.name;

        /**
         * The sprite behaviour component instance.
         * @type {TDLib.Components.SpriteBehaviourComponent}
         * @since 1.0.0
         */
        this.behaviour = new SpriteBehaviourComponent(this, behaviourType);

		/**
		 * The text which appears when observing the sprite.
         * @type {string}
         * @since 1.0.0
		 */
        this.observeText = observeText;

        /**
		 * The text which appears when examine or interact with the sprite.
         * @type {string}
         * @since 1.0.0
		 */
        this.examineOrInteractText = examineOrInteractText;

		/**
		 * If not null it's the blocking text which appears the first time the sprite is examined.
         * @type {string}
         * @since 1.0.0
		 */
        this.blockExamineText = blockExamineText;

		/**
		 * The text which appears when observing the sprite when the diffused light is not sufficient.
         * @type {string}
         * @since 1.0.0
		 */
        this.noLightObserveText = noLightObserveText;

        /**
		 * The text which appears when examine or interact with the sprite when the diffused light is not sufficient.
         * @type {string}
         * @since 1.0.0
         */
        this.noLightExamineOrInteractText = noLightExamineOrInteractText;

		/**
		 * The offset on x axis of the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
		 */
        this.examineOrInteractOffsetX = examineOrInteractOffsetX;

		/**
		 * The radius of the tolerance in reaching the examineOrInteractPoint, where the player has to move to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */
        this.examineOrInteractThresholdRadius = examineOrInteractThresholdRadius;

		/**
		 * The minimum value of diffused light to examine or interact with the sprite.
         * @type {number}
         * @since 1.0.0
         */
        this.minLightLevelToExamineOrInteract = minLightLevelToExamineOrInteract;

        /**
		 * The minimum value of diffused light to observe the sprite.
         * @type {number}
         * @since 1.0.0
         */
        this.minLightLevelToObserve = minLightLevelToObserve;

		/**
		 * The time of mouseover needed to start the observe action on the sprite
         * @type {number}
         * @since 1.0.0
         */
        this.minTimeToObserve = ObservableBehaviour.MIN_TIME_TO_OBSERVE * 1000;

        this.room.add.existing(this);
        if (hasBody) this.room.physics.add.existing(this);

        if (layer != null) {
            if (layer in this.room.layers) {
                this.room.layers[layer].add(this);
                this.room.layers.setLayersDepth();
            }
            else console.warn('ALERT: layer not found for object', this);
        }

        this.create();
        this.room.updates.add(this);
    }

    /**
     * The create function is executed once, immediately after the initialization of the sprite.
     * @since 1.0.0
     */
    create() {
        console.log('Created:', this.key, '- Type:', this.type, '- Behaviour:', this.behaviour.type);
    }

    /**
     * The update is executed at every cycle of the game loop.
     * @since 1.0.0
     */
    update() {

    }

    /**
     * Set the name property of a sprite.
     * @param {string} value - The name which is used to map a sprite in the room.
     * @return {TDLib.Sprites.TDLSprite}
     * @since 1.0.0
     */
    setName(value) {
        this.name = value;
        return this;
    }
}