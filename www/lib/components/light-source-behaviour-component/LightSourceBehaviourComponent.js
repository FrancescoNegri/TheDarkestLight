class LightSourceBehaviourComponent extends TDLComponent {
    constructor(test, behaviourNameList) {
        super(test);

        //this.loadBehaviours();
        this.currentBehaviour = 'HardFlickering';
    }

    loadBehaviours() {
        this.hardFlickeringBehavior = new HardFlickeringBehaviour(this);
        /*this.softFlickering = new SoftFlickering();
        this.trembling = new Trembling();
        this.tremblingAndSoftFlickering= new TremblingAndSoftFlickering();
        this.tremblingAndHardFlickering= new TremblingAndHardFlickering();*/
    }





}