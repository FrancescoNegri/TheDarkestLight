class TestRoomFurn extends RoomFurniture {
    constructor(room, x, y) {
        super(
            room,
            x, y,
            'GardenCar01',
            SpriteBehaviour.INTERACTIVE,
            { alphaTolerance : 0.001},
            'Che vuoi! Sono una macchina e tu mi stai osservando!',
            'Sì, sono sempre una macchina...anche se provi ad interagire con me',
            null,
            'Ora è troppo buio per vedere una macchina',
            'Ora è troppo buio per interagire con me',
        );
    }

    create() {
        super.create();
        //NON FUNZIONA! VEDERE LA SEQUENZA
        this.setInteractive(
            {
                //Per applicare la pixel perfect anche agli spazi interni, mettere qualcosa con un alpha del 0.01
                //Look https://photonstorm.github.io/phaser3-docs/Phaser.Input.html#.InputConfiguration__anchor
                pixelPerfect: true,
                alphaTolerance: 1,
                draggable: false
            }
        )
    }
}