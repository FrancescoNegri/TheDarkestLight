class TestRoom extends Room {
    constructor() {
        super("TestRoom");
    }

    preload() {
        console.log('Preloading...');
    }

    create() {
        //GAME.room.getAt(0);
        console.log('Creating...');
    }
    
    update() {
        //console.log('Updating...');
    }
}