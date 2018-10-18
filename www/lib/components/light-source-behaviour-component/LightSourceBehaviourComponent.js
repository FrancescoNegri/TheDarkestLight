class LightSourceBehaviourComponent extends TDLComponent {
    constructor(gameObject, allowedBehaviours = []) {
        super(gameObject);

        this.bootBehaviours();
        this.allowedBehaviours = allowedBehaviours;
        this.runningBehaviour = null;
    }

    bootBehaviours() {
        this.hardFlickering = new HardFlickeringBehaviour(this);
        this.trembling = new TremblingBehaviour(this);
        this.hardFlickeringAndTrembling = new HardFlickeringAndTremblingBehaviour(this);
        this.softFlickering = new SoftFlickeringBehaviour(this);
        this.softFlickeringAndTrembling = new SoftFlickeringAndTremblingBehaviour(this);
    }

    stopAllBehaviours() {
        console.log('Stopping all behaviours!');
        this.hardFlickering.stop();
        this.trembling.stop();
        this.hardFlickeringAndTrembling.stop();
        this.softFlickering.stop();
        this.softFlickeringAndTrembling.stop();
    }
}