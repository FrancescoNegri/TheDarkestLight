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
 */

class TDLSprite extends Phaser.Physics.Arcade.Sprite {
    /**
		 * Permette di reimpostare gli asset del frame.
		 *
         * @param   room                                        room in cui è creato l'oggetto.
         * @param	x									        coordinata X dell'oggetto.
		 * @param	y									        coordinata Y dell'oggetto.
		 * @param	texture								        grafica dell'oggetto (se ha un cShadow la grafica sarà la sua silhouette).
         * @param   layer     D null                            noome del layer in cui inserire l'oggetto
         * @param   hasBody   D true                            determina se l'oggetto è soggetto alla fisica
         * @param	behaviourType	 D INERT 	                determina l'interagibilità dell'oggetto. INERT, EXAMINABLE,	INTERACTIVE.
		 * @param	observeText		D text)         	        è il testo che appare quando si osserva l'oggetto (mouseOver).
		 * @param	examineOrInteractText		D text	        è il testo che appare quando si esamina l'oggetto (click).
		 * @param	blockExamineText	D null	                se è diverso da null, indica il testo che sarà visualizzato una sola volta in modo bloccante.
		 * @param	noLightObserveText		D text		        è il testo che sarà visualizzato quando si osserva l'oggetto ad un livello di luce inferiore a minLightLevelToObserve.
		 * @param	noLightExamineOrInteractText D text	        è il testo che sarà visualizzato quando si esamina o si interagisce l'oggetto ad un livello di luce inferiore a minLightLevelToExamineOrInteract.
		 * @param	examineOrInteractOffsetX	D 0		        indica di quanto è spostato il punto nel quale il player si muoverà per esaminare o interagire con l'oggetto. (debug mode: punto viola).
		 * @param	examineOrInteractThreshold D valore         indica quanto è ampio il margine di tolleranza dal examineOrInteractPoint (debug mode: punto viola) entro il quale il player potrà esaminare o interagire con l'oggetto senza bisogno di muoversi.
		 * @param	minLightLevelToExamineOrInteract D valore	indica il livello minimo di luce necessario per poter esaminare o interagire con l'oggetto.
		 * @param	minLightLevelToObserve		D valore		indica il livello minimo di luce necessario per poter osservare l'oggetto.
		 * @param   precisePosition			????		        indica se l'agent, nel portarsi sull'oggetto, può avere un margine di tolleranza per evitare dei micromovimenti di aggiustamento (nel caso si trovi giù molto vicino) o se è necessario che si porti nella posizione al pixel.
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
        blockExamineText = 'BlockExamine default text',
        noLightObserveText = 'NoLightObserve default text',
        noLightExamineOrInteractText = 'NoLightExamineOrInteract default text'

    ) {
        super(room, x, y, texture);

        this.room = room;
        this.name = this.constructor.name;
        
        this.behaviour = new SpriteBehaviourComponent(this, behaviourType);

        /**
        * Indica il tipo di interazione possibile con l'oggetto. INERT\EXAMINABLE\INTERACTIVE
        */
        //this.behaviour.type = behaviourType; --> dentro a this.behaviour.type

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