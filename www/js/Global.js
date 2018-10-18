class Global {
    constructor() {
        
    }

    static get TILE_SIZE() {
        const TILE_SIZE = 48;
        return TILE_SIZE
    }
}
var GAME;
var DEVICE = '';
var SCREEN_PROPS = {};

const HALF_TILE_SIZE = Global.TILE_SIZE / 2;
const ROOM_HEIGHT_IN_TILE = 6;
const INVENTORY_WIDTH_IN_TILES_MOBILE = 1.25;
const INVENTORY_WIDTH_IN_TILES_DESKTOP = 0;
const INVENTORY_HEIGHT_IN_TILES_MOBILE = 0;
const INVENTORY_HEIGHT_IN_TILES_DESKTOP = 1;
const ROOM_FRAME_IN_TILES_DESKTOP = .5;
const ROOM_FRAME_IN_TILES_MOBILE = .25;


//Queste due funzioni vanno spostate in Utility.js, tuttavia ciò causa un bug nel MOBILE (non esegue funzioni su altri file)
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
function findFileNameFromPath(path) {
    var nameFirstCharachterPosition = path.lastIndexOf("/") + 1;
    var nameLastCharachterPosition = path.lastIndexOf(".");
    if (nameFirstCharachterPosition == -1) nameFirstCharachterPosition = 0;
    if (nameLastCharachterPosition == -1) return -1;
    var filename = path.slice(nameFirstCharachterPosition, nameLastCharachterPosition);
    return filename;
}