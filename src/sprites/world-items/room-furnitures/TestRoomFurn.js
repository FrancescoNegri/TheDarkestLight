import TDLib from '../../../../lib/the-darkest-lib';

export default class TestRoomFurn extends TDLib.Sprites.WorldItems.RoomFurnitures.RoomFurniture {
    constructor(room, x, y) {
        super(
            room,
            x, y,
            'GardenCar01',
            TDLib.Sprites.Behaviours.INTERACTIVE,
            { alphaTolerance: 0.001 },
            'Che vuoi! Sono una macchina e tu mi stai osservando!',
            'Sì, sono sempre una macchina...anche se provi ad interagire con me',
            null,
            'Ora è troppo buio per vedere una macchina',
            'Ora è troppo buio per interagire con me',
        );
    }

    create() {
        super.create();
    }
}