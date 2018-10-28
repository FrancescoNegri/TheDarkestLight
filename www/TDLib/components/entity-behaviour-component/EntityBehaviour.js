class EntityBehaviour {
    constructor(component) {
        this.component = component;

        this.add();
    }

    add() {
        this.component.gameObject.setInteractive();
    }
}