class LayerManager extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);

        this.backgroundLayer;
        this.rearWallObjectsLayer;
        this.roomObjectsLayer;
        this.sideDoorsLayer;
        this.npcLayer;
        this.playerLayer;
        this.cielingObjectsLayer;
        this.bordersLayer;
        this.overallDarknessLayer;
        this.frontLayer;
        this.borderMasksLayer;
    }

    boot() {
        this.wallObjectsLayer = this.scene.add.group();
        this.roomObjectsLayer = this.scene.add.group();
        this.npcLayer = this.scene.add.group();
        this.playerLayer = this.scene.add.group();
        this.borderMasksLayer = this.scene.add.group();
    }

    setLayersDepth() {

    }
}