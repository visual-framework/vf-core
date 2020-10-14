// embl-content-hub-loader__fetch

// load optional dependencies
import { vfBanner } from 'vf-banner/vf-banner';
import { vfTabs } from 'vf-tabs/vf-tabs';
import { emblConditionalEdit } from 'embl-conditional-edit/embl-conditional-edit';
import { emblNotifications } from 'embl-notifications/embl-notifications';

/**
 * Fetch html links from content.embl.org
 */
function emblContentHubFetch() {

  // Some JS utilities
  // via https://stackoverflow.com/a/32135318
  Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  },false;
  Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;

  /**
   * Get the number of days between two dates.
   */
  function days_between(date1, date2) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY) + 1;
  }

  // A list of all the links
  var emblContentHubLinks = document.querySelectorAll('[data-embl-js-content-hub-loader]');
  var emblContentHubLinkLoadingProgress = {};
  var emblContentHubShowTimers = false;

  // Handle the import of each element
  for (var i = 0; i < emblContentHubLinks.length; ++i) {
    (function () {
      var linkPosition = i;

      // track time it takes for link to be shown
      if (emblContentHubShowTimers) { console.time('timer for import ' + linkPosition); }

      // await the load of the html import from the polyfill
      // note: we use polyfill in all cases; see https://github.com/visual-framework/vf-core/issues/508
      emblContentHubAwaitLoading(emblContentHubLinks[linkPosition],linkPosition);
    }());
  }

  // If nothing to import
  if (emblContentHubLinks.length == 0) {
    emblContentHubSignalFinished();
  }

  // Add a class to the body once the last item has been processed
  function emblContentHubSignalFinished() {
    // @todo, shouldn't require the body element
    document.querySelectorAll('body')[0].classList.add('embl-content-hub-loaded');

    // if the JS to run embl-conditional-edit is present, run it now
    if (typeof emblConditionalEdit === "function") {
      emblConditionalEdit();
    }

    // if the JS to run embl-notifications is present, run it now
    if (typeof emblNotifications === "function") {
      emblNotifications();
    }
  }

  // Dispatch load to the pollyfill
  function emblContentHubAwaitLoading(targetLink,position) {
    // Docs: https://github.com/AshleyScirra/html-imports-polyfill#usage
    addImport(targetLink.href, null, emblContentHubLinkLoadingProgress).then(function(value) {
      emblContentHubGrabTheContent(targetLink,position,value);

      if (position+1 == emblContentHubLinks.length) {
        emblContentHubSignalFinished();
      }
    });
  }

  // Generate a unique ID for the target element on the page
  function emblContentHubGenerateID(position) {
    return 'contentDbItem' + ('0000' + position).slice(-5);
  }

  // Show the remote content
  function emblContentHubGrabTheContent(targetLink,position,exportedContent) {

    // pickup the "meat" of the exported content
    exportedContent = exportedContent || targetLink.import.querySelector('.vf-content-hub-html');

    // make sure we have something
    if (!exportedContent) {
      console.log('No content found for this import, exiting. The import may have already been preformed.', targetLink);
      return;
    }

    // if there is just one child element and it is a div, use that
    // (this helps with css grid layout)
    if (exportedContent.childElementCount === 1 &&
        exportedContent.firstElementChild.innerHTML.trimLeft().substr(0,4) === '<div'
       ) {
      exportedContent = exportedContent.firstElementChild;
      exportedContent.classList.add('vf-content-hub-html');
      exportedContent.classList.add('vf-content-hub-html__derived-div');
    } else if (exportedContent.childNodes.length <= 3) {
      // if there are three or fewer child nodes this is likely a no-results reply
      // We'll still inject the content from the contentHub along with any passed "no matches" text
      var noContentMessage = targetLink.getAttribute('data-embl-js-content-hub-loader-no-content');

      if (noContentMessage == 'true') {
        // use a default
        noContentMessage = 'No content was found found for this query.';
      }

      var noContentMessageElement = document.createElement('div');
      noContentMessageElement.classList.add('vf-text');
      noContentMessageElement.classList.add('embl-content-hub-html__no-content-found');
      noContentMessageElement.innerHTML = noContentMessage;
      exportedContent.appendChild(noContentMessageElement.firstChild);

      // if data-embl-js-content-hub-loader-no-content-hide is true or has a class, hide accordingly
      var noContentHideBehavior = targetLink.getAttribute('data-embl-js-content-hub-loader-no-content-hide');
      if (noContentHideBehavior) {
        if (noContentHideBehavior == 'true') {
          // if true, just hide the response
          exportedContent.classList.add('vf-u-display-none');
        } else {
          // otherwise hide any element specified
          document.querySelector(noContentHideBehavior).classList.add('vf-u-display-none');
        }
      } // END noContentHideBehavior
    } // END exportedContent.childElementCount

    var contentID = emblContentHubGenerateID(position);

    // where does the content go?
    if (targetLink.dataset.target === 'self') {
      // if element already exists, remove it
      var oldElement = document.getElementById(contentID);
      if (oldElement) {
        oldElement.innerHTML = exportedContent.innerHTML;
      } else {
        // give content an ID
        exportedContent.setAttribute("id", contentID);
        exportedContent.classList.add(contentID);
        // just insert the new content
        exportedContent.appendAfter(targetLink);
      } // end if oldElement
    } else {
      var targetLocation = document.querySelector('.'+targetLink.dataset.target);
      // exportedContent.appendAfter(targetLocation);
      targetLocation.classList.add(contentID);
      targetLocation.innerHTML = exportedContent.innerHTML;
    }

    // display how long it took to load
    if (emblContentHubShowTimers) { console.timeEnd('timer for import ' + position); }

    emblContentHubAssignClasses(targetLink,position);
    emblContentHubUpdateDatesFormat(position);

    // run JS for some components on content, if they exist
    if (typeof(vfBanner) === 'function') {
      vfBanner(targetLocation);
    }
    if (typeof(vfTabs) === 'function') {
      vfTabs(targetLocation);
    }
    // don't run breadcrumbs as part of contenthub, use case is different
    // if (typeof(emblBreadcrumbs) === 'function') {
    //   emblBreadcrumbs(); // no scope for emblBreadcrumbs
    // }
  }

  // Enable class injection after loading contents
  // ... for all those edge cases
  // Background: https://gitlabci.ebi.ac.uk/emblorg/backlog/issues/82
  // Sample:
  //  <link rel="import" href="url" data-target="self"
  //        data-inject-class="vf-grid vf-grid__col-2"
  //        data-inject-class-target="ul"
  //        data-embl-js-content-hub-loader>
  //  This would make the ul a two-column grid.
  function emblContentHubAssignClasses(targetLink,position) {
    // var injectRequests = document.querySelectorAll('[data-inject-class][data-inject-class-target]');
    //
    // for (var i = 0; i < injectRequests.length; ++i) {

    var classesToInject = targetLink.getAttribute('data-inject-class');
    var targetSelectorToInject = targetLink.getAttribute('data-inject-class-target');

    if (classesToInject && targetSelectorToInject) {
      // Limit scope to the imported element
      var targetElement = document.querySelector('.'+emblContentHubGenerateID(position)).querySelector(targetSelectorToInject);

      // We can't inject space separated classes to we need to split it into arrays and add one by one.
      var classesToInject = classesToInject.split(' ');

      for (classNumber = 0; classNumber < classesToInject.length; classNumber++) {
        targetElement.classList.add(classesToInject[classNumber]);
      }

    }
  }

  /**
   * Update the format of close date.
   */
  function emblContentHubUpdateDatesFormat(position) {
    var dateRemainingList = document.querySelector('.'+emblContentHubGenerateID(position)).querySelectorAll('.date-days-remaining');
    var todayDate = new Date();
    if (dateRemainingList.length > 0) {
      for (let dateRemainingIndex = 0; dateRemainingIndex < dateRemainingList.length; dateRemainingIndex++) {
        var dateValue = parseInt(dateRemainingList[dateRemainingIndex].getAttribute('data-datetime')) * 1000;
        dateValue = new Date(dateValue);
        var numberOfDiffDays = days_between(dateValue, todayDate);
        // Update to 'Closes in 6 Days.' format if number of days is less than 30 days.
        if (numberOfDiffDays < 30 && numberOfDiffDays > 1) {
          dateRemainingList[dateRemainingIndex].innerHTML =  'Closes in ' + '<span>' + numberOfDiffDays + ' Days.</span>';
        }

        if (numberOfDiffDays == 1) {
          dateRemainingList[dateRemainingIndex].innerHTML =  'Closes in ' + '<span>' + numberOfDiffDays + ' Day.</span>';
        }
      }
    }
  }

}

export { emblContentHubFetch };
