class ATest extends TDLAction {
    constructor(invoker) {
        super(invoker);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    (_this) => {
                        _this.j = 400;
                    },
                    (_this) => {
                        console.log('Il valore j vale:', _this.j);
                    },
                    (_this) => {
                        if (_this.j <= 0) _this.finish();
                        else {
                            _this.j--;
                            console.log('CONTANDO J:', _this.j);
                        }
                    },
                    (_this) => { }
                )
            ]
        );
    }
}