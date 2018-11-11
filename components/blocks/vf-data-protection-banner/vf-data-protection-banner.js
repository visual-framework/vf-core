// vf-data-protecion-banner

var remove = function(){
  this.parentNode.remove();
};

var GDPRBanner = document.querySelectorAll('.vf-data-protection-banner');
var GDPRButton = document.querySelectorAll('.vf-data-protection-banner__button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}
