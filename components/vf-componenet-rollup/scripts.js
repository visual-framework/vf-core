/*
 *
 * scripts.js
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */

// All VF JS
import { vfBanner } from "vf-banner/vf-banner";
vfBanner();

import { vfBannerElixir } from "vf-banner-elixir/vf-banner-elixir";
vfBannerElixir();

// VF Masthead has been deprecated
// https://github.com/visual-framework/vf-core/pull/1406/
// import { vfMastheadSetStyle } from "vf-masthead/vf-masthead";
// vfMastheadSetStyle();

import { vfGaIndicateLoaded } from "vf-analytics-google/vf-analytics-google";
let vfGaTrackOptions = {
  vfGaTrackPageLoad: true,
  vfGa4MeasurementId: "G-N5ZLH2KNJP"
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

import { vfBackToTop } from "vf-back-to-top/vf-back-to-top.js";
vfBackToTop();

import { vfDropdown } from "vf-dropdown/vf-dropdown.js";
vfDropdown();

import { vfNavigationOnThisPage } from "vf-navigation/vf-navigation.js";
vfNavigationOnThisPage();

import { emblContentMetaProperties_Read } from "embl-content-meta-properties/embl-content-meta-properties";

import { emblNotifications } from "embl-notifications/embl-notifications";
// emblNotifications();

import { vfMegaMenu } from 'vf-mega-menu/vf-mega-menu';
vfMegaMenu();

// No default invokation