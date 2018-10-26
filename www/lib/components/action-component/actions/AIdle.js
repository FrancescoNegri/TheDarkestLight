class AIdle extends TDLAction {
    constructor(invoker) {
        super(
            invoker,
            () => {
                //alert('AIDLE è partito!');
            },
            () => {
                //alert('AIDLE è finito!');
            }
        );
    }
}