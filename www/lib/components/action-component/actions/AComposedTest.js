class AComposedTest extends TDLAction {
    constructor(invoker) {
        super(invoker);
        this.addQueue(
            [
                new ACount(this, {startingNumber: 10}),
                new ATest(this)
            ]
        );
    }
}