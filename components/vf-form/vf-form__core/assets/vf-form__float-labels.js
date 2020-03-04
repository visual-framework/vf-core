// vf-form__float-labels

/*
 * A note on the Visual Framework and JavaScript:
 * The VF is primairly a CSS framework so we've included only a minimal amount
 * of JS in components and it's fully optional (just remove the JavaScript selectors
 * i.e. `data-vf-js-tabs`). So if you'd rather use Angular or Bootstrap for your
 * tabs, the Visual Framework won't get in the way.
 *
 * When querying the DOM for elements that should be acted on:
 * 🚫 Don't: const tabs = document.querySelectorAll('.vf-tabs');
 * ✅ Do:    const tabs = document.querySelectorAll('[data-vf-js-tabs]');
 *
 * This allows users who would prefer not to have this JS engange on an element
 * to drop `data-vf-js-component` and still maintain CSS styling.
 */

 /**
  * The global function for this component
  * @example vfcomponentName(firstPassedVar)
  * @param {string} [firstPassedVar]  - An option to be passed
  */
function vfFormFloatLabels() {

  function addFloatLabel(self) {
    var label = document.createElement('label');
    var id = 'label-' + new Date().getTime();
    label.setAttribute('id', id);
    self.dataset.inputOf = id;
    self.parentNode.insertBefore(label, self);
    label.innerHTML = self.getAttribute('placeholder'); // not namespaced as this is a HTML-native attribute
    label.classList.add('vf-form__label');
  }

  function floatLabelKeyUp(event) {
    var self = event.target;
    if(!self.dataset.inputOf && !!self.value) {
      addFloatLabel(self);
    } else {
      var label = document.querySelector('#' + self.dataset.inputOf);
      if (!self.value && !!label) {
        setTimeout(function(){
          label.parentNode.removeChild(label);
          delete self.dataset.inputOf;
        }, 10);
      }
    }
  }

  function wrapElement(element) {
    var parent = element.parentNode;
    var sibling = element.nextElementSibling;
    var div = document.createElement('div');
    div.appendChild(element);
    if(!sibling) {
      parent.appendChild(div);
    }
    else {
      parent.insertBefore(div, sibling);
    }
  }

  let floatLabels = document.querySelectorAll('[data-vf-js-form-floatlabel]');
  if (floatLabels.length === 0) {
    // console.warn('There are no `[data-vf-js-form-floatlabel]` to process; exiting');
    return false;
  }

  var inputs = [].slice.call(floatLabels);

  if (typeof inputs != "undefined") {  
    for (var i in inputs) {
      if (typeof inputs[i] == "object") { // prevent execution on array functions
        wrapElement(inputs[i]);
        if (!!inputs[i].value) {
          addFloatLabel(inputs[i]);
        }
        inputs[i].classList.add('vf-form__floatlabel');
        // .vf-form__floatlabel
        inputs[i].addEventListener('keyup', floatLabelKeyUp); 
      }
    }
  }  

  function checkEmail(str) {
    var errorElem =  document.getElementById('error');
    // email regex
    var re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str)) {
      if (document.getElementById('email-error')) {
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

  function checkForm() {
    let canSubmit = true;
    let emailcheck = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailField = document.getElementById('username').value;
    const passwordField = document.forms['loginform'].querySelector('.form__input--password').value;
    if(!emailcheck.test(emailField)) {
      canSubmit = false;
    }
    if(passwordField.length < 5) {
      canSubmit = false;
    }
    if (canSubmit) {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = false;
    } else {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = true;
    }
  }

}

export { vfFormFloatLabels };
