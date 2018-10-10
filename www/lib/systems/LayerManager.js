class LayerManager extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);
        
        this.layerSize = 10;
        this.strartingDepth = 0;
    }

    boot() {
        this.backgroundLayer = this.scene.add.group();
        this.rearWallObjectsLayer = this.scene.add.group();
        this.roomObjectsLayer = this.scene.add.group();
        this.sideDoorsLayer = this.scene.add.group();
        this.npcLayer = this.scene.add.group();
        this.playerLayer = this.scene.add.group();
        this.cielingObjectsLayer = this.scene.add.group();
        this.wallsLayer = this.scene.add.group();
        this.wallsMaskLayer = this.scene.add.group();
        this.overallDarknessLayer = this.scene.add.group();
        this.frontLayer = this.scene.add.group();
        this.borderMasksLayer = this.scene.add.group();
    }

    setLayersDepth() {
        var i = this.strartingDepth;
        this.backgroundLayer.setDepth(this.layerSize * i);
        i++;
        this.rearWallObjectsLayer.setDepth(this.layerSize * i);
        i++;
        this.roomObjectsLayer.setDepth(this.layerSize * i);
        i++;
        this.sideDoorsLayer.setDepth(this.layerSize * i);
        i++;
        this.npcLayer.setDepth(this.layerSize * i);
        i++;
        this.playerLayer.setDepth(this.layerSize * i);
        i++;
        this.cielingObjectsLayer.setDepth(this.layerSize * i);
        i++;
        this.wallsLayer.setDepth(this.layerSize * i);
        i++;
        this.wallsMaskLayer.setDepth(this.layerSize * i);
        i++;
        this.overallDarknessLayer.setDepth(this.layerSize * i);
        i++;
        this.frontLayer.setDepth(this.layerSize * i);
        i++;
        this.borderMasksLayer.setDepth(this.layerSize * i);
        i++;
    }
}