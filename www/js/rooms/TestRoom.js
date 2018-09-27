class TestRoom extends Room {

    constructor() {
        super(
            'TestRoom',
            {
                image: {
                    tiles: [
                        { path: 'img/MANSION_INTERIOR_BACKGROUND_2.png' },
                        { path: 'img/MANSION_INTERIOR_WALLS_2.png' }
                    ]
                },
                tilemapTiledJSON: [
                    {path: 'img/Rooms/TestRoom.json'}
                ]
            }
        );
    }

    preload() {
        super.preload();
        this.load.image('MANSION_INTERIOR_BACKGROUND_2', 'img/MANSION_INTERIOR_BACKGROUND_2.png');
        this.load.image('MANSION_INTERIOR_WALLS_2', 'img/MANSION_INTERIOR_WALLS_2.png');
        this.load.tilemapTiledJSON('map', 'img/Rooms/TestRoom.json');
    }

    create() {
        super.create();
    }

    update() {

    }
}