class Action {
    constructor(component, actor, target, config) {
        this.component = component;
        this.actor = actor;
        this.target = target;
        this.config = config;
    }

    start(callback) {
        callback();
        this.component.register();
    }

    stop(callback) {
        callback();
        this.component.unregister();
    }
}