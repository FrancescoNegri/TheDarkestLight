class LayerManager extends TDLRoomPlugin {
    constructor(room, pluginManager) {
        super(room, pluginManager);
        
        this.layerSize = 10;
        this.strartingDepth = 0;
    }

    boot() {
        this.backgroundLayer = this.room.add.group();
        this.rearWallObjectsLayer = this.room.add.group();
        this.roomObjectsLayer = this.room.add.group();
        this.sideDoorsLayer = this.room.add.group();
        this.npcLayer = this.room.add.group();
        this.playerLayer = this.room.add.group();
        this.cielingObjectsLayer = this.room.add.group();
        this.wallsLayer = this.room.add.group();
        this.wallsMaskLayer = this.room.add.group();
        this.overallDarknessLayer = this.room.add.group();
        this.frontLayer = this.room.add.group();
        this.borderMasksLayer = this.room.add.group();
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