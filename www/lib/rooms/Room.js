class Room extends Phaser.Scene {
    constructor(sceneKey) {
        super(sceneKey);

        //Prende in ingresso tutti gli assets della Room figlia e li mette nel membro this.assets
    }

    generateRoom() {
        //this.add.sprite(0, 0, 'MANSION_INTERIOR_BACKGROUND_2');
        /*await*/ this.loadAssets(); //Carica gli assets e deve aspettare che finisca il loading
        var map = this.make.tilemap({ key: 'map', tileWidth: 48, tileHeight: 48 });
        var bg_tileset = map.addTilesetImage('MANSION_INTERIOR_BACKGROUND_2');
        var bg_layer = map.createDynamicLayer('Background', bg_tileset, 0, 0);
        var walls_tileset = map.addTilesetImage('MANSION_INTERIOR_WALLS_2');
        var walls_layer = map.createDynamicLayer('Walls', walls_tileset, 0, 0);
    }

    loadAssets() {
        //Carica tutti gli assets dal parametro passato dalla Room figlia e, quando termina, ripassa il controllo a generateRoom che procede con la creazione della Room figlia
    }
}