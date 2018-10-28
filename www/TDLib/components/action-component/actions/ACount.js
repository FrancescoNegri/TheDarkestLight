class ACount extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    () => {
                        this.i = this.config.startingNumber;
                    },
                    () => {
                        console.log('Il valore i vale:', this.i);
                    },
                    () => {
                        if (this.i >= 100) this.finish();
                        else {
                            this.i++;
                            console.log('CONTANDO:', this.i);
                        }
                    },
                    () => { }
                )
            ]
        )
    }
}