class ACount extends TDLAction {
    constructor(invoker, config) {
        super(
            invoker,
            () => {
                this.i = config.startingNumber;
            },
            () => {
                console.log('Il valore i vale:', this.i);
            },
            () => { }
        );
    }

    update() {
        super.update(() => {
            if (this.i >= 100) this.finish();
            else this.i++;
            console.log('CONTANDO:', this.i);
        });
    }
}