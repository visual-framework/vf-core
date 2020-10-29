// vf-masthead

/**
  * Function for making background color of banner from image file name
  * The background image for the banner element are taken from the CSS custom property.
  * The filename includes the hex code for the background colour of the image.
  * Then test if the 6 characters are a hex code and declare the background-color
  * @example vfMastheadSetStyle()
  */

function vfMastheadSetStyle() {
  const vfMastheads = document.querySelectorAll("[data-vf-js-masthead]");

  // utility colour functions
  function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;}
  function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);}
  function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);}
  function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);}

  function getCorrectTextColor(hex){
    let hRed = hexToR(hex);
    let hGreen = hexToG(hex);
    let hBlue = hexToB(hex);
    return ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
  }

  if (vfMastheads[0]) {
    let el = vfMastheads[0];
    let bannerBG = getComputedStyle(el).getPropertyValue("--vf-masthead__bg-image");
    let regex = /\\/gi; // avoid escaped syntax like "bg_2d4155\.png"
    bannerBG = bannerBG.replaceAll(regex,"");
    let filename = bannerBG.substr(0, bannerBG.lastIndexOf(".")) || bannerBG;
    let hexcode = filename.substr(filename.length - 6);
    let bannerBGC = "#" + hexcode;
    let regHex = /[0-9A-Fa-f]{6}/g;
    let threshold = 130; // about half of 256. Lower threshold equals more dark text on dark background
    let cBrightness = 255; // default to above the threshold

    var modalAlertClasses = ["vf-masthead--with-title-block"];
    var modal = document.querySelector(".vf-masthead");

    if (modal.classList.contains(modalAlertClasses)) {
      // if using title block no action neccessary
    } else {
      if (regHex.test(hexcode)) {

        if (!bannerBGC) return; // if no background colour specified, nothing to do

        bannerBGC = bannerBGC.trim();
        cBrightness = getCorrectTextColor(bannerBGC);

        if (cBrightness > threshold){
          el.style.setProperty("--vf-masthead__color--foreground-default", "#000000");
          el.style.setProperty("--vf-masthead__color--background-default", "#FFFFFF");
        } else if (cBrightness < threshold) {
          el.style.setProperty("--vf-masthead__color--foreground-default", "#FFFFFF");
          el.style.setProperty("--vf-masthead__color--background-default", "#000000");
        }
      } else {
        el.style.setProperty("--vf-masthead__bg-image", "unset");
      }
    }
  }
}

export { vfMastheadSetStyle };
