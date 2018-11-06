class LibraryMap01 extends WallFurniture {
    constructor(room, x, y) {
        super(
            room,
            x, y,
            'LibraryMap01',
            SpriteBehaviour.EXAMINABLE,
            null,
            'Sono una libreria, osservami!',
            'Ora stai esaminando una semplice libraria',
            null,
            'Ora è troppo buio per osservarmi',
            'Ora non è abbastanza illuminato per esaminarmi'
        );
    }
}