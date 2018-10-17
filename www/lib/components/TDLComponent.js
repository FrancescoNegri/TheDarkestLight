class TDLComponent {
    constructor(gameObject) {
        this.name = this.constructor.name;
        this.gameObject = gameObject;

        //console.log('Added component', this.name, 'to', this.gameObject);
    }
}