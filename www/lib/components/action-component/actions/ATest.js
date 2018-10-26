class ATest extends TDLAction {
    constructor(invoker) {
        super(
            invoker,
            () => {
                alert('ATEST è partito!');
                this.finish();
            },
            () => {
                alert('ATEST è finito!');
            }
        );
    }
}