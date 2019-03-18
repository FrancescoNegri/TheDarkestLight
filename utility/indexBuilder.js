const recursive = require('recursive-readdir');
const fs = require('fs');
const str1 = '<!DOCTYPE html>\n<html>\n';
// eslint-disable-next-line max-len
const str2 = '<head>\n<meta name="format-detection" content="telephone=no">\n<meta name="msapplication-tap-highlight" content="no">\n<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">\n<link rel="stylesheet" type="text/css" href="css/index.css">\n<title>The Darkest Light</title>\n<style>html, body{margin: 0; padding: 0; image-rendering: optimizeSpeed; /* Older versions of FF */ image-rendering: -moz-crisp-edges; /* FF 6.0+ */ image-rendering: -webkit-optimize-contrast; /* Webkit (non standard naming) */ image-rendering: -o-crisp-edges; /* OS X & Windows Opera (12.02+) */ image-rendering: crisp-edges; /* Possible future browsers. */ -ms-interpolation-mode: nearest-neighbor; /* IE (non standard naming) */ image-rendering: pixelated; /* Chrome 41 */}</style>\n</head>\n';
// eslint-disable-next-line max-len
const str3 = '<body>\n<!-- EXTERNAL LIBS SCRIPTS-->\n<script type="text/javascript" src="cordova.js"></script>\n<script type="text/javascript" src="node_modules/phaser/dist/phaser.js"></script>\n<script src="node_modules/mobile-detect/mobile-detect.js"></script>\n<script type="text/javascript" src="lib/the-darkest-lib.js"></script>\n';
const str4 = '<style type="text/css">\nbody { overflow:hidden; } </style>\n</body>\n</html>';

var getDirectories = (src, callback) => {
  recursive(src, callback);
};

// eslint-disable-next-line consistent-return
function findStringInFile(str, array) {
  let value;

  for (let i = 0; i < array.length; i++) {
    value = array[i];
    if (value.includes(str)) return i;
  }
};

let cleanFilesArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].substring(array[i].indexOf('www') + 4);
  };

  return array;
};

let generateCorrectStrings = (array) => {
  const modelSubString1 = '<script type="text/javascript" src="';
  const modelSubString2 = '"></script>';

  for (let i = 0; i < array.length; i++) {
    array[i] = modelSubString1 + array[i] + modelSubString2;
  }

  return array;
};

getDirectories('../www', function (err, res) {
  let basePath = '../www/';

  if (err) {
    basePath = 'www/';
  }

  getDirectories(basePath + 'src', function (err, res) {
    let fileArray = [];

    if (err) {
      console.log('Error', err);
    } else {
      fileArray = fileArray.concat(res);
      fileArray = cleanFilesArray(fileArray);
      let index = findStringInFile('index.js', fileArray);

      let indexFile = fileArray[index];

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
