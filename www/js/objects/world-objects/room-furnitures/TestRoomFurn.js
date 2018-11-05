class TestRoomFurn extends RoomFurniture {
    constructor(room, x, y) {
        super(
            room,
            x, y,
            'GardenCar01',
            SpriteBehaviour.INTERACTIVE,
            'Che vuoi! Sono una macchina e tu mi stai osservando!',
            'Sì, sono sempre una macchina...anche se provi ad interagire con me',
            null,
            'Ora è troppo buio per vedere una macchina',
            'Ora è troppo buio per interagire con me'
        );
    }

    create() {
        super.create();
        this.setSize(this.width - 20, this.height);
        this.input.hitArea.setSize(100, 100);
        console.log(this.input.hitArea);
        //Sovrascriere la funzione setSize perchè modifichi anche l'area di tocco
        //Inoltre occorre aggiustare anche x ed y dell'area di tocco!
    }
}