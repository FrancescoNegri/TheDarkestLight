class LightSourceBehaviourComponent extends TDLComponent {
    constructor(gameObject, allowedBehaviours = []) {
        super('LightSourceBehaviourComponent', gameObject);

        this.bootBehaviours();
        this.allowedBehaviours = allowedBehaviours;
        this.currentBehaviour;
    }

    bootBehaviours() {
        this.hardFlickering = new HardFlickeringBehaviour(this);
    }

    stopAllBehaviours() {
        console.log('Stopping all behaviours!');
        this.hardFlickering.stop();
    }
}