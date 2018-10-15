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
        array[i] = array[i].substring(7);
    };

    return array;
}

var generateCorrectStrings = (array) => {
    const modelSubString1 = '<script src="';
    const modelSubString2 = '"></script>';
    for (var i = 0; i < array.length; i++) {
        array[i] = modelSubString1 + array[i] + modelSubString2;
    }

    return array;
}

getDirectories('../www/lib', function (err, res) {
    var fileArray = [];
    if (err) {
        console.log('Error', err);
    } else {
        //console.log(res);
        fileArray = fileArray.concat(res);
    }
    getDirectories('../www/js', function (err, res) {
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

            fs.writeFileSync('output.txt', '');
            fileArray.forEach(line => {
                console.log(line);
                fs.appendFileSync('output.txt', line + '\n');
            });
        }
    });
});