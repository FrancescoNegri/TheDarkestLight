class ActionManager extends TDLRoomPlugin {
    constructor(room, pluginManager) {
        super(room, pluginManager);

        this.stack = {};
    }

    //Spostare ogni actor's stack nel proprio action component ?? PROBABILMENTE Sì!

    register(actor, action) {
        if (!(actor.name in this.stack)) {
            this.stack.actor = [];
        }
        this.stack.actor.push(action);
        console.log('ACTIONS STACK:', this.stack);
    }

    unregister(actor, action) {
        for (var i = 0; i < this.stack.actor.length; i++) {
            if (Object.is(action, this.stack.actor[i])) this.stack.actor[i].splice(i, 1);
        }
    }
}