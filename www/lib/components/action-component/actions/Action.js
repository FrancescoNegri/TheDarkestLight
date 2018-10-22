class Action {
    constructor(component, actor, target, config) {
        this.component = component;
        this.actor = actor;
        this.target = target;
        this.config = config;

        this.start();
        this.name = this.constructor.name;
    }

    start(callback) {
        callback();
        this.component.register(this);
    }

    stop(callback) {
        callback();
        this.component.unregister(this);
    }
}