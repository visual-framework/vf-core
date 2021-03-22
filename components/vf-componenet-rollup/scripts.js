/*
 *
 * scripts.css
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */

// All VF JS
import { vfBanner } from "vf-banner/vf-banner";
vfBanner();

import { vfMastheadSetStyle } from "vf-masthead/vf-masthead";
vfMastheadSetStyle();

import { vfGaIndicateLoaded } from "vf-analytics-google/vf-analytics-google";
let vfGaTrackOptions = {
  vfGaTrackPageLoad: true
};
vfGaIndicateLoaded(vfGaTrackOptions);

import { vfTabs } from "vf-tabs/vf-tabs";
vfTabs();

import { vfTree } from "vf-tree/vf-tree";
vfTree();

// import { vfFormFloatLabels } from 'form /assets/vf-form__float-labels.js';
// vfFormFloatLabels();

import { vfSearchClientSide } from "vf-search-client-side/vf-search-client-side";
// No default invokation

import { vfShowMore } from "vf-show-more/vf-show-more";
vfShowMore();

import { vfLocationNearest } from "vf-location-nearest/vf-location-nearest";
// Not invoked by default

// All EMBL JS
import { emblContentHubLoaderHtmlImports } from "embl-content-hub-loader/embl-content-hub-loader__html-imports";
import { emblContentHubFetch } from "embl-content-hub-loader/embl-content-hub-loader__fetch";
import { emblContentHub } from "embl-content-hub-loader/embl-content-hub-loader";
import { emblConditionalEdit } from "embl-conditional-edit/embl-conditional-edit";
emblContentHub();

import { emblBreadcrumbs } from "embl-breadcrumbs-lookup/embl-breadcrumbs-lookup";
emblBreadcrumbs();

import { emblContentMetaProperties_Read } from "embl-content-meta-properties/embl-content-meta-properties";

import { emblNotifications } from "embl-notifications/embl-notifications";
// emblNotifications();

// No default invokation
