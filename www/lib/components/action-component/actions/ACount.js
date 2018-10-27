class ACount extends TDLAction {
    constructor(invoker, config) {
        super(invoker);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    (_this) => {
                        _this.i = config.startingNumber;
                    },
                    (_this) => {
                        console.log('Il valore i vale:', _this.i);
                    },
                    (_this) => {
                        if (_this.i >= 100) _this.finish();
                        else {
                            _this.i++;
                            console.log('CONTANDO:', _this.i);
                        }
                    },
                    (_this) => { }
                )
            ]
        )
    }
}