function findFileNameFromPath(path) {
    var nameFirstCharachterPosition = path.lastIndexOf("/") + 1;
    var nameLastCharachterPosition = path.lastIndexOf(".");
    if (nameFirstCharachterPosition == -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition == -1) return -1;
    var filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);
    return filename;
}

function scrapeComplexObjKey(obj, params, searchKey, callback) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            scrapeComplexObjKey(obj[i], params, searchKey, callback);
        }
    }
    else if (obj !== null && typeof obj === 'object') {
        if (searchKey in obj) {
            callback(obj, params);
        }
        else {
            for (var prop in obj) {
                scrapeComplexObjKey(obj[prop], params, searchKey, callback);
            }
        }
    }
}