/**
 * The light sources namespace.
 * @namespace TDLib.Components.LightSourceBehaviours
 */

 /**
  * Class representing a component responsible of the behaviour of light sources.
  * @extends TDLib.Components.TDLComponent
  * @memberof TDLib.Components
  */
class LightSourceBehaviourComponent extends TDLComponent {
    /**
     * Creates a new LightSourceBehaviourComponent.
     * @param {TDLib.Sprites.TDLSprite} gameObject - The TDLSprite which owns the component.
     * @param {Array} [allowedBehaviours=[]] - Specify the allowed behaviours for a LightSource.
     */
    constructor(gameObject, allowedBehaviours = []) {
        super(gameObject);

        /**
         * Specify the allowed behaviours for a LightSource.
         */
        this.allowedBehaviours = allowedBehaviours;

        /**
         * Specify the currently running behaviour.
         */
        this.runningBehaviour = null;

        this.bootBehaviours();
        
    }

    /**
     * Return an array containing all the light source behaviours classes.
     * @private
     */
    get behaviours() {
        return [
            {
                behaviour: HardFlickeringBehaviour,
                mapping: 'hardFlickering'
            },
            {
                behaviour: TremblingBehaviour,
                mapping: 'trembling'
            },
            {
                behaviour: HardFlickeringAndTremblingBehaviour,
                mapping: 'hardFlickeringAndTrembling'
            },
            {
                behaviour: RadiusFlickeringBehaviour,
                mapping: 'radiusFlickering'
            },
            {
                behaviour: SoftFlickeringBehaviour,
                mapping: 'softFlickering'
            },
            {
                behaviour: SoftFlickeringAndTremblingBehaviour,
                mapping: 'softFlickeringAndTrembling'
            }
        ];
    }

    /**
     * Boot all the light source behaviours.
     * @private
     */
    bootBehaviours() {
        this.behaviours.forEach(element => {
            this[element.mapping] = new element.behaviour(this);
        });
    }

    /**
     * Stop all the behaviours running for this light source.
     */
    stopAllBehaviours() {
        console.log('Stopping all behaviours!');
        this.behaviours.forEach(behaviour => {
            this[behaviour.mapping].stop();
        });
    }
}