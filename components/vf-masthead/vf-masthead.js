
// The background image for the banner element are taken from the database.
// The filename includes the hex code for the background colour of the image.
// Then test if the 6 characters are a hex code and declare the background-color


//function for making background color of banner from image file name
function setStyle(elId) {
  if (document.getElementById(elId)) {
    var el = document.getElementById(elId);
    var bannerEl = document.getElementById("js-masthead-bg");
    var bannerBG = getComputedStyle(bannerEl).getPropertyValue('--vf-masthead__bg-image');
    var filename = bannerBG.substr(0, bannerBG.lastIndexOf('.')) || bannerBG;
    var hexcode = filename.substr(filename.length - 6);
    var bannerBGC = "#" + hexcode;
    var regHex = /[0-9A-Fa-f]{6}/g;


    if (regHex.test(hexcode)) {

      if (!bannerBGC) return;
      bannerBGC = bannerBGC.trim();

      function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
      function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
      function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
      function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}

      function getCorrectTextColor(hex){
        threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */
        hRed = hexToR(hex);
        hGreen = hexToG(hex);
        hBlue = hexToB(hex);
        cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
      }
      getCorrectTextColor(bannerBGC);

      // bannerEl.style.setProperty('--vf-masthead__color--background', "none");

      if (cBrightness > threshold){
        bannerEl.style.setProperty('--vf-masthead__color--foreground', "#000000");
      } else if (cBrightness < threshold) {
        bannerEl.style.setProperty('--vf-masthead__color--foreground', "#FFFFFF");
      }
    }
  }
};
setStyle('js-masthead-bg');
