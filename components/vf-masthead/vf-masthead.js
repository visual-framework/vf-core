// vf-masthead


// The background image for the banner element are taken from the database.
// The filename includes the hex code for the background colour of the image.
// Then test if the 6 characters are a hex code and declare the background-color

/**
  * Function for making background color of banner from image file name
  * @example vfMastheadSetStyle()
  */
function vfMastheadSetStyle() {
  const vfMastheads = document.querySelectorAll('[data-vf-js-masthead]');
  if (vfMastheads[0]) {
    let el = vfMastheads[0];
    let bannerBG = getComputedStyle(el).getPropertyValue('--vf-masthead__bg-image');
    let filename = bannerBG.substr(0, bannerBG.lastIndexOf('.')) || bannerBG;
    let hexcode = filename.substr(filename.length - 6);
    let bannerBGC = "#" + hexcode;
    let regHex = /[0-9A-Fa-f]{6}/g;
    let threshold = 130; // about half of 256. Lower threshold equals more dark text on dark background
    let cBrightness = 255; // default to above the threshold

    if (regHex.test(hexcode)) {

      if (!bannerBGC) return;

      bannerBGC = bannerBGC.trim();

      function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
      function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
      function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
      function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}

      function getCorrectTextColor(hex){
        let hRed = hexToR(hex);
        let hGreen = hexToG(hex);
        let hBlue = hexToB(hex);
        return ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
      }

      cBrightness = getCorrectTextColor(bannerBGC);

      if (cBrightness > threshold){
        el.style.setProperty('--vf-masthead__color--foreground', "#000000");
      } else if (cBrightness < threshold) {
        el.style.setProperty('--vf-masthead__color--foreground', "#FFFFFF");
      }
    }
  }
};

export { vfMastheadSetStyle };
