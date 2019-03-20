/* eslint-disable no-undef */
// Spostare nelle Utils di TDLib
function getDeviceType() {
  let md = new MobileDetect(window.navigator.userAgent);

  if (md.mobile() != null) DEVICE = 'MOBILE';
  else DEVICE = 'DESKTOP';
}

document.addEventListener('deviceready', function () {
  getDeviceType();

  let config = {
    title: 'The Darkest Light',
    version: '1.0.0',
    url: 'https://thedarkestlight.io'
  };

  GAME = new TDLib.Game(config);
  console.log(TDLib);
});

if (!window.cordova) {
  window.dispatchEvent('deviceready');
}
