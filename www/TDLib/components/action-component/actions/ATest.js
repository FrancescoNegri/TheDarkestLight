class ATest extends TDLAction {
    constructor(invoker, actor, config) {
        super(invoker, actor, config);

        this.addActions(
            new TDLAction.BaseAction(
                this,
                () => {
                    console.warn('AVVIO A1');
                    this.i = 0;
                    this.addActions(
                        [
                            new TDLAction.BaseAction(
                                this,
                                () => {
                                    console.log('Test nested');
                                    this.finish();
                                }
                            ),
                            new TDLAction.BaseAction(
                                this,
                                () => {
                                    console.warn('TEST2');
                                    this.finish();
                                }
                            )
                        ]
                    );
                },
                () => {
                    console.warn('FINE A1');
                },
                () => {
                    this.i++;
                    if (this.i >= 0) this.finish();
                }
            )
        );
    }
}