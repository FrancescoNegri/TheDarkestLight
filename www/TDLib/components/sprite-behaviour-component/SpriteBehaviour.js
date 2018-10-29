class SpriteBehaviour {
    constructor(component) {
        this.component = component;
        this.cursors = this.component.gameObject.room.cursors;
        this.gameObject = this.component.gameObject;
        this.room = this.component.gameObject.room;
        
        this.add();
    }

    add() {
        this.component.gameObject.setInteractive();
    }
}