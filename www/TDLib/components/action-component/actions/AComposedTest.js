class AComposedTest extends TDLAction {
    constructor(invoker, actor, config) {
        super(...arguments);
        this.addQueue(
            [
                new ACount(this, this.actor, this.config),
                new ATest(this, this.actor, this.config)
            ]
        );
    }
}