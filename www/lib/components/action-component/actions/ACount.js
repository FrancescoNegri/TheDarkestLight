class ACount extends TDLAction {
    constructor(invoker) {
        super(
            invoker,
            () => {
                this.i = 0;
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