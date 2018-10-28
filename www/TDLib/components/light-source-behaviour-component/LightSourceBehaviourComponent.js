class LightSourceBehaviourComponent extends TDLComponent {
    constructor(gameObject, allowedBehaviours = []) {
        super(gameObject);

        this.allowedBehaviours = allowedBehaviours;
        this.bootBehaviours();
        this.runningBehaviour = null;
    }

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
                behaviour: SoftFlickeringBehaviour,
                mapping: 'softFlickering'
            },
            {
                behaviour: SoftFlickeringAndTremblingBehaviour,
                mapping: 'softFlickeringAndTrembling'
            }
        ];
    }

    bootBehaviours() {
        this.behaviours.forEach(element => {
            this[element.mapping] = new element.behaviour(this);
        });
    }

    stopAllBehaviours() {
        console.log('Stopping all behaviours!');
        this.behaviours.forEach(behaviour => {
            this[behaviour.mapping].stop();
        });
    }
}