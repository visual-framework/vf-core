function addFloatLabel(self) {
  var label = document.createElement("label");
  var id = "label-" + new Date().getTime();
  label.setAttribute("id", id);
  self.dataset.inputOf = id;
  label.classList.add("vf-form__label");
  self.parentNode.insertBefore(label, self);
  label.innerHTML = self.getAttribute("placeholder");
  setTimeout(function(){
    label.classList.add("float-label");
  }, 10)
}
function floatLabelKeyUp(event) {
  var self = event.target;
  if(!self.dataset.inputOf && !!self.value) {
    addFloatLabel(self);
  }
  else {
    var label = document.querySelector("#" + self.dataset.inputOf);
    if(!self.value && !!label) {
      label.classList.remove("float-label");
      setTimeout(function(){
        label.parentNode.removeChild(label);
        delete self.dataset.inputOf;
      }, 10)
    }
  }
}
function wrapElement(element) {
  var parent = element.parentNode;
  var sibling = element.nextElementSibling;
  var div = document.createElement("div");
  div.classList.add("float-label-wrapper");
  div.appendChild(element);
  if(!sibling) {
    parent.appendChild(div);
  }
  else {
    parent.insertBefore(div, sibling);
  }
}
var floatLabels = document.querySelectorAll(".floatLabel");
var inputs = [].slice.call(floatLabels);
for(var i in inputs) {
  wrapElement(inputs[i]);
  if(!!inputs[i].value) {
    addFloatLabel(inputs[i]);
  }
  inputs[i].addEventListener("keyup", floatLabelKeyUp);
};


function checkEmail(str) {
  var errorElem =  document.getElementById('error');
  // email regex
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(str)) {
    if (document.getElementById("email-error")) {
     // do nothing
    } else {
      var el = document.getElementById('email-form'),
      elChild = document.createElement('div'),
      parent = elChild;
      elChild.innerHTML = '<div id="email-error" class="mt-b-form__message mt-b-form__message--inline-error"><p>Your email is incorrect</p></div>';
    }


    el.parentNode.appendChild(elChild);

  } else {
    var elem = document.getElementById('email-error')
    elem.parentNode.removeChild(elem);
  }
}

function checkForm()
{
  let canSubmit = true;
  let emailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailField = document.getElementById('username').value;
  const passwordField = document.forms["loginform"].querySelector('.form__input--password').value;
  if(!emailcheck.test(emailField)) {
    canSubmit = false;
  }
  if(passwordField.length < 5) {
    canSubmit = false;
  }
  if (canSubmit) {
      document.forms["loginform"].querySelector('.mt-b-button__item').disabled = false;
  } else {
    document.forms["loginform"].querySelector('.mt-b-button__item').disabled = true;
  }
}
