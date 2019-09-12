/*
 *
 * scripts.css
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */

// All VF JS
import { vfBanner } from 'vf-banner/vf-banner';
vfBanner();

import { vfMastheadSetStyle } from 'vf-masthead/vf-masthead';
vfMastheadSetStyle();

import { vfTabs } from 'vf-tabs/vf-tabs';
vfTabs();

import { vfFormFloatLabels } from 'vf-form__core/assets/vf-form__float-labels.js';
vfFormFloatLabels();

// All EMBL JS
import { emblContentHubLoaderHtmlImports } from 'embl-content-hub-loader/embl-content-hub-loader__html-imports';
import { emblContentHubFetch } from 'embl-content-hub-loader/embl-content-hub-loader__fetch';
import { emblContentHub } from 'embl-content-hub-loader/embl-content-hub-loader';
import { emblConditionalEdit } from 'embl-conditional-edit/embl-conditional-edit';
emblContentHub();

import { emblBreadcrumbs } from 'embl-breadcrumbs-lookup/embl-breadcrumbs-lookup';
emblBreadcrumbs();

import { emblContentMetaProperties_Read } from 'embl-content-meta-properties/embl-content-meta-properties';
// No default invokation
