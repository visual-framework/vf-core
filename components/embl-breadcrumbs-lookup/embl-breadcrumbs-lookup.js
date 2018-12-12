// embl-breadcrumbs-lookup

/**
 * Take any appropriate actions depending on present metaTags
 * @example emblBreadcrumbsLookup()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */
function emblBreadcrumbsLookup(metaProperties) {
  var metaProperties = metaProperties || {a: a, b: b, c: c};

  console.log('processing meta properties for: ', metaProperties);


  var majorFacets = ['who','what','where'];
  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] == metaProperties.active) {
      console.log('the active path',metaProperties[metaProperties.active]);
    } else {
      // do the related paths
      console.log('related path',metaProperties[metaProperties.active]);
    }
  }


}


// use the embl-content-meta-properties function to pull tags from page
emblBreadcrumbsLookup(emblContentMetaProperties_Read());
