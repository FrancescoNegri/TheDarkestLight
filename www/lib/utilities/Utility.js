function findFileNameFromPath(path) {
    var nameFirstCharachterPosition = path.lastIndexOf("/") + 1;
    var nameLastCharachterPosition = path.lastIndexOf(".");
    if (nameFirstCharachterPosition == -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition == -1) return -1;
    var filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);
    return filename;
}

isObject(object1){
    let array = true;
    let keyList = Object.keys(object1);
    /*console.log(keyList);*/
    //controlliamo se è una variabile normale(quindi senza length)
    if (keyList.length != 0) {
        //adesso controlliamo se è una string perchè ogni riferimento coincide con i numeri da 0 a n
        for (let i = 0; i < keyList.length; i++) {
            if (i != keyList[i]) {
                array = false;
            }
        }
        //se non abbiamo trovato neanche un caso diverso, è una stringa. altrimenti un oggetto.
        if (array) return false;
        else return true;
    } else return false;
}