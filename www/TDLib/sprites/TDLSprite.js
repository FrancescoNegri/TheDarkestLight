/**
 * The Darkest Lib.
 * @namespace TDLib
 */

/**
 * The actions namespace.
 * @namespace TDLib.Sprites
 */

/**
 * Class representing a TDLSprite.
 * @extends Phaser.Physics.Arcade.Sprite
 * @memberof TDLib.Sprites
 * @since 1.0.0
 */
class TDLSprite extends Phaser.Physics.Arcade.Sprite {
    /**
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
	 * @param {number} [examineOrInteractOffsetX=0] - indica di quanto è spostato il punto nel quale il player si muoverà per esaminare o interagire con l'oggetto. (debug mode: punto viola).
	 * @param {number} [examineOrInteractThreshold=0] - indica quanto è ampio il margine di tolleranza dal examineOrInteractPoint (debug mode: punto viola) entro il quale il player potrà esaminare o interagire con l'oggetto senza bisogno di muoversi.
	 * @param {number} [minLightLevelToExamineOrInteract=???] D valore	indica il livello minimo di luce necessario per poter esaminare o interagire con l'oggetto.
	 * @param {number} [minLightLevelToObserve=???] - indica il livello minimo di luce necessario per poter osservare l'oggetto.
	 * @param {boolean} [precisePosition=false] - indica se l'agent, nel portarsi sull'oggetto, può avere un margine di tolleranza per evitare dei micromovimenti di aggiustamento (nel caso si trovi giù molto vicino) o se è necessario che si porti nella posizione al pixel.
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
        noLightExamineOrInteractText = 'NoLightExamineOrInteract default text'

    ) {
        super(room, x, y, texture);

        /**
         * The room where the sprite is created.
         * @type {TDLib.Rooms.TDLRoom}
         * @since 1.0.0
         */
        this.room = room;

        /**
         * The name of the sprite.
         * @type {string}
         * @since 1.0.0
         */
        this.name = this.constructor.name; //Pensare se aggiungere una parte random in fondo --> altrimenti più oggetti uguali con lo stesso nome

        /**
         * The sprite behaviour component instance.
         * @type {TDLib.Components.SpriteBehaviourComponent}
         * @since 1.0.0
         */
        this.behaviour = new SpriteBehaviourComponent(this, behaviourType);

		/**
		 * Testo visualizzato sulla testa del player nel momento in cui si osserva un oggetto alla luce (ovvero entro il livello di minLightLevelToObserve).
		 */
        this.observeText = observeText;

        /**
		 * Testo visualizzato sulla testa del player nel momento in cui si esamina un oggetto alla luce (ovvero entro il livello di minLightLevelToExaminOrInteract).
		 */
        this.examineOrInteractText = examineOrInteractText;

		/**
		 * Testo visualizzato sulla testa del player nel momento in cui si esamina un oggetto per la prima volta ed è illuminato. Il testo non è saltabile e disabilita il mouse. Può non essere specificato.
		 */
        this.blockExamineText = blockExamineText;

		/**
		 * Testo visualizzato sulla testa del player nel momento in cui si osserva un oggetto al buio (ovvero sotto il livello di minLightLevelToObserve).
		 */
        this.noLightObserveText = noLightObserveText;

        /**
		 * Testo visualizzato sulla testa del player nel momento in cui si esamina un oggetto al buio (ovvero sotto il livello di minLightLevelToExaminOrInteract).
		 */
        this.noLightExamineOrInteractText = noLightExamineOrInteractText;

		/**
		 * Indica di quanto è spostato il punto nel quale il player si muoverà per esaminare o interagire con l'oggetto. (debug mode: punto viola).
		 */
        this.examineOrInteractOffsetX;

		/**
		 * Indica quanto è ampio il margine di tolleranza dal examineOrInteractPoint (debug mode: punto viola) entro il quale il player potrà esaminare o interagire con l'oggetto senza bisogno di muoversi.
		 */
        this.examineOrInteractThreshold;

		/**
		 * Indica il livello minimo di luce necessario per poter esaminare o interagire con l'oggetto.
		 */
        this.minLightLevelToExamineOrInteract;

        /**
		 * Indica il livello minimo di luce necessario per poter osservare l'oggetto.
		 */
        this.minLightLevelToObserve;

		/**
		 * E'il tempo minimo di mouse over necessario per far iniziare l'azione di osserva del player.
		 */
        this.minTimeToObserve = ObservableBehaviour.MIN_TIME_TO_OBSERVE * 1000;

		/**
		 * Indica che il giocatore ha già osservato l'oggetto quindi non sarà più osservabile fino a quando 
		 * non uscirà con il cursore dalla hitbox dello stesso (azione che risetterà a false alreadyObserved).
		 */
        this.alreadyObserved;

		/**
		 * Indica che il giocatore sta già esaminando l'oggetto e l'azione è in corso. Non sarà  quindi più esaminabile fino a quando 
		 * non sarà terminata la precedente azione di esamina.
		 * Per quanto riguarda Interact: se è in corso l'interazione non sarà possibile rieseguirla prima che venga terminata.
		 */
        this.alreadyExaminedOrInteracted;

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

    create() {
        console.log('Created:', this.name, 'with', this.behaviour.type, 'behaviour');
    }

    update() {

    }
}