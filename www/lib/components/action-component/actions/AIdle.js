class AIdle extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new TDLAction.BaseAction(
                    this,
                    () => { alert('AIdle started!'); },
                    () => { alert('AIdle stopped!'); }
                )
            ]
        );
    }
}