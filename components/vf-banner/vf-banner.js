// vf-banner

var remove = function(){
  this.closest('.vf-banner--gdpr').remove();
};

var GDPRBanner = document.querySelectorAll('.vf-banner--gdpr');
var GDPRButton = document.querySelectorAll('.vf-banner--gdpr .vf-button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}
