class ATest extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    () => {
                        this.j = 400;
                    },
                    () => {
                        console.log('Il valore j vale:', this.j);
                    },
                    () => {
                        if (this.j <= 0) this.finish();
                        else {
                            this.j--;
                            console.log('CONTANDO J:', this.j);
                        }
                    },
                    () => { }
                )
            ]
        );
    }
}