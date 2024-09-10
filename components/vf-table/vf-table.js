// vf-table

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
function vfTable() {
  var checkboxes = document.querySelectorAll("tbody tr input[type=checkbox]");

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      var tr = checkbox.closest("tr");
      if (checkbox.checked) {
        tr.classList.add("vf-table__row--selected");
      } else {
        tr.classList.remove("vf-table__row--selected");
      }
    });
  });

  var header_checkboxes = document.querySelectorAll(
    ".vf-table__heading input[type=checkbox]"
  );

  header_checkboxes.forEach(function(header_checkbox) {
    header_checkbox.addEventListener("change", function() {
      var tbody = header_checkbox.closest("thead").nextElementSibling;
      var checkboxes = tbody.querySelectorAll("tr input[type=checkbox]");
      if (header_checkbox.checked) {
        checkboxes.forEach(function(checkbox) {
          checkbox.checked = true;
          let event = new Event("change");
          checkbox.dispatchEvent(event);
        });
      } else {
        checkboxes.forEach(function(checkbox) {
          checkbox.checked = false;
          let event = new Event("change");
          checkbox.dispatchEvent(event);
        });
      }
    });
  });
}
// // By default your component should be usable with js imports
export { vfTable };
