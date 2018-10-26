class ATest extends TDLAction {
    constructor(invoker) {
        super(
            invoker,
            () => {
                alert('ATEST è partito!');
            },
            () => {
                alert('ATEST è finito!');
            }
        );
    }
}