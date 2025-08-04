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
  // vfGa4MeasurementId: "YourGa4TrackingId" // only required if tracking a custom page-level dimension
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

import { vfTable } from 'vf-table/vf-table';
vfTable();

import { initVFChatbot } from 'vf-chatbot/vf-chatbot.js';
window.addEventListener("load", function() {
  initVFChatbot({
        type: "modal",
        title: "AI Assistant",
        welcome_logo: true,
        welcome_message: "Welcome! I'm here to help",
        welcome_logo_alt: "AI Assistant",
        welcome_suggestions_title: "Try asking me:",
        input_placeholder: "Ask me ...",
        welcome_max_suggestions: 4,
        disclaimer: 'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
        footnote: 'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
        icons: {
          assistant_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
          user_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg",
          send_button: "../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg",
          main_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg",
          minimize: "../../assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg",
          close: "../../assets/vf-chatbot/assets/vf-chatbot--icon-close.svg"
        },
        api: {
          chat_endpoint: false,
          feedback_endpoint: false,
          qa_data_url: "../../assets/vf-chatbot/assets/vf-chatbot-qa.json",
          headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer your-token"
          },
          timeout: 10000
        },
        features: {
          enable_welcome: true,
          enable_feedback: true,
          enable_sources: true,
          enable_welcome_suggestions: true,
          enable_typing_indicator: true,
          enable_disclaimer: true,
          enable_predefined_qa: true,
          enable_fallback_responses: true,
          enable_qa_data_loading: true,
          enable_instant_feedback: false
        },
        behavior: {
          auto_scroll: true,
          typing_delay: 800,
          show_scrollbar: false
        },
        selectorContext: {
          chatbotRoutes: {
            multiSelect: true,
            maxMultiSelect: 3,
            showSearch: true,
            showSearchThreshold: 5,
            showAllServices: true,
            showAllServicesSelected: true,
            routes: "../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json",
            placeholder: "Select services",
            title: "Services"
          }
        },
        handlers: {
          on_message_send: "handleMessageSend",
          on_response_receive: "handleResponseReceive",
          on_feedback_submit: "handleFeedbackSubmit",
          on_suggestion_click: "handleSuggestionClick",
          on_error: "handleError",
          on_conversation_start: "handleConversationStart",
          on_conversation_end: "handleConversationEnd"
        },
        feedback_options: {
          positive: [
            { id: "accurate", label: "Accurate" },
            { id: "easy", label: "Easy to understand" },
            { id: "formatted", label: "Well formatted" }
          ],
          negative: [
            { id: "inaccurate", label: "Inaccurate" },
            { id: "nocontext", label: "Did not use context" },
            { id: "poorformat", label: "Poorly formatted" }
          ]
        }
      });
});

// No default invokation
