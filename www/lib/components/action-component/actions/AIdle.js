class AIdle extends TDLAction {
    constructor(invoker) {
        super(invoker);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    (_this) => { alert('AIdle started!'); },
                    (_this) => { alert('AIdle stopped!'); }
                )
            ]
        );
    }
}