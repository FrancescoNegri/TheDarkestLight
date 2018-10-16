class LightSourceBehaviour {
    constructor(name, component) {
        this.name = name;
        this.component = component;

        //console.log('Added', this.name, 'to', this.component, ', component of', this.component.gameObject);
    }

    start() {
        console.log('Starting component', this.name);
    }

    stop() {
        console.log('Stopping component', this.name);
    }
}