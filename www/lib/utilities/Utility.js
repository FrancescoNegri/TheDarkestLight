function findFileNameFromPath(path) {
    var nameFirstCharachterPosition = path.lastIndexOf("/") + 1;
    var nameLastCharachterPosition = path.lastIndexOf(".");
    if (nameFirstCharachterPosition == -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition == -1) return -1;
    var filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);
    return filename;
}