class TDLObject extends Entity {
    constructor(room, x, y, texture, layer, hasBody) {
        super(
            room,
            x, y,
            texture,
            layer,
            hasBody,
            EntityBehaviourComponent.EXAMINABLE
        );
    }
}