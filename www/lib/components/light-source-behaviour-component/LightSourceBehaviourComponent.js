class LightSourceBehaviourComponent extends TDLComponent {
    constructor(gameObject, allowedBehaviours = []) {
        super('LightSourceBehaviourComponent', gameObject);

        this.bootBehaviours();
        this.allowedBehaviours = allowedBehaviours;
        this.runningBehaviour = null;
    }

    bootBehaviours() {
        this.hardFlickering = new HardFlickeringBehaviour(this);
        this.trembling = new TremblingBehaviour(this);
        this.hardFlickeringAndTrembling = new HardFlickeringAndTremblingBehaviour(this);
    }

    stopAllBehaviours() {
        console.log('Stopping all behaviours!');
        this.hardFlickering.stop();
        this.trembling.stop();
        this.hardFlickeringAndTrembling.stop();
    }
}