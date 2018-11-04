class ExaminableBehaviour extends SpriteBehaviour {
    constructor(component) {
        super(component);
    }

    /**
     * Generate a proper action according to the behaviour and the gameObject settings.
     * @return {TDLib.Components.Actions.TDLAction}
     * @since 1.0.0
     */
    getAction(invoker) {
        return new TDLAction.BaseAction(
            invoker,
            () => {
                //Fare i controlli su quanta luce c'è nella stanza!
                console.log(this.gameObject.examineOrInteractText);
                invoker.finish();
            }
        );
    }
}