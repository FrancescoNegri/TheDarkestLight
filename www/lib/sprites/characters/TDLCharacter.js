class TDLCharacter extends Entity {
    constructor(room, x, y, texture, layer) {
        super(room, x, y, texture, layer, true, EntityBehaviourComponent.INTERACTIVE);

        this.actions = new ActionComponent(this);
    }
}