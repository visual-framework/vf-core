// vf-data-protection-banner

var remove = function(){
  this.closest('.vf-data-protection-banner').remove();
};

var GDPRBanner = document.querySelectorAll('.vf-data-protection-banner');
var GDPRButton = document.querySelectorAll('.vf-data-protection-banner__button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}
