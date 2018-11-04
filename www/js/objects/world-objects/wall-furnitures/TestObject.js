class TestObject extends WallFurniture {
    constructor(room, x, y) {
        super(
            room,
            x, y,
            'NaziBanner01',
            SpriteBehaviour.EXAMINABLE,
            'Sono una bandiera nazista, osservami!',
            'Ora stai esaminando una bandiera con la svastica',
            null,
            'Ora è troppo buio per osservarmi',
            'Ora non è abbastanza illuminato per esaminarmi'
        );
    }
}