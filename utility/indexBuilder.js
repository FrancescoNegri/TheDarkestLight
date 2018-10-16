const recursive = require("recursive-readdir");
const fs = require('fs');

var getDirectories = (src, callback) => {
    recursive(src, callback);
};

findStringInFile = (str, array) => {
    var value;
    for (var i = 0; i < array.length; i++) {
        value = array[i];
        if (value.includes(str)) return i;
    }
}

var cleanFilesArray = (array) => {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].substring(array[i].indexOf('www') + 4);
    };

    return array;
}

var generateCorrectStrings = (array) => {
    const modelSubString1 = '<script type="text/javascript" src="';
    const modelSubString2 = '"></script>';
    for (var i = 0; i < array.length; i++) {
        array[i] = modelSubString1 + array[i] + modelSubString2;
    }

    return array;
}

getDirectories('../www', function (err, res) {
    var basePath = '../www/';
    if (err) {
        basePath = 'www/'
    }

    getDirectories(basePath + 'lib', function (err, res) {
        var fileArray = [];
        if (err) {
            console.log('Error', err);
        } else {
            //console.log(res);
            fileArray = fileArray.concat(res);
        }
        getDirectories(basePath + 'js', function (err, res) {
            if (err) {
                console.log('Error', err);
            } else {
                fileArray = fileArray.concat(res);
                fileArray = cleanFilesArray(fileArray);
                var index = findStringInFile('index.js', fileArray);
                var indexFile = fileArray[index];
                fileArray.splice(index, 1);
                fileArray.push(indexFile);
                fileArray = generateCorrectStrings(fileArray);

                fs.writeFileSync(basePath + 'index.html', str1);
                fs.appendFileSync(basePath + 'index.html', str2);
                fs.appendFileSync(basePath + 'index.html', str3);
                fileArray.forEach(line => {
                    console.log(line);
                    fs.appendFileSync(basePath + 'index.html', line + '\n');
                });
                fs.appendFileSync(basePath + 'index.html', str4);
                console.log('\nTOTAL:', fileArray.length, 'files');
            }
        });
    });
});

const str1 = '<!DOCTYPE html>\n<html>\n';
const str2 = '<head>\n<meta name="format-detection" content="telephone=no">\n<meta name="msapplication-tap-highlight" content="no">\n<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">\n<link rel="stylesheet" type="text/css" href="css/index.css">\n<title>The Darkest Light</title>\n</head>\n';
const str3 = '<body>\n<!-- EXTERNAL LIBS SCRIPTS-->\n<script type="text/javascript" src="cordova.js"></script>\n<script type="text/javascript" src="node_modules/phaser/dist/phaser.js"></script>\n<script src="node_modules/mobile-detect/mobile-detect.js"></script>\n';
const str4 = '</body>\n</html>';