class ActionComponent extends TDLComponent {
    constructor(gameObject) {
        super(gameObject);

        this.actor = gameObject;
        this.room = gameObject.room;
    }

    register(action) {
        this.room.actions.register(this.actor, action);
    }

    unregister(action) {
        this.room.actions.unregister(this.actor, action);
    }

    abort(action) {

    }
}