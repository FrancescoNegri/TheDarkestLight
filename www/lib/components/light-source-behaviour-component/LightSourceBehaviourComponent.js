class LightSourceBehaviourComponent extends TDLComponent {
    constructor(gameObject) {
        super('LightSourceBehaviourComponent', gameObject);

        this.bootBehaviours();
    }

    bootBehaviours() {
        this.hardFlickering = new HardFlickeringBehaviour(this);
    }
}