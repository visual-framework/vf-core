// vf-back-to-top

/**
 * JS scroll to top functionality
 * @example vfBack-To-Top(firstPassedVar)
 * @param {string} [firstPassedVar]  - An option to be passed
 */
export function vfBackToTop() {

  const links = document.querySelectorAll(".vf-back-to-top");
  for (let link of links) {
    link.addEventListener("click", (event) => {
      /* Get required element from data attribute or assume body */
      const scrollToId = event.target.dataset.scrollToId;
      /* Get the element with given id or body if no id provided */
      const targetElement = scrollToId ? document.getElementById(scrollToId) : document.body;
      /* Scroll to the element */
      if(targetElement){
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
