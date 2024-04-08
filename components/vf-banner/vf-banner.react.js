/*
 * vf-banner react component
 * See vf-extensions-react for usage guidance
 *
 */
import { useEffect } from "react";
import { vfBanner } from "../node_modules/@visual-framework/vf-banner/vf-banner";

function VfBanner({
  banner__type = "basic",
  banner__variant,
  banner__message = "",
  banner__dismissible = false,
  banner__inline_href = "",
  banner__text = "",
  data_service_id = "MyService",
  data_protection_version = "0.1"
}) {
  var bannerclass = "vf-banner vf-banner--alert ";
  var banner_msg;
  useEffect(() => {
    /* For banner type 'fixed' and 'top' we need to include vf-banner.js which has scripts to render and add functionality to these banner types */
    if (banner__type === "fixed" || banner__type === "top") {
      vfBanner();
    }
  }, []);
  /*Based on banner type received set the banner class */
  switch (banner__variant) {
  case "banner__info":
    bannerclass += "vf-banner--info";
    break;
  case "banner__warning":
    bannerclass += "vf-banner--warning";
    break;
  case "banner__danger":
    bannerclass += "vf-banner--danger";
    break;
  case "banner__success":
    bannerclass += "vf-banner--success";
    break;
  default:
    break;
  }

  switch (banner__type) {
  case "basic":
    return (
      <div className={bannerclass}>
        <div className="vf-banner__content">
          <p
            className="vf-banner__text"
            dangerouslySetInnerHTML={{ __html: banner__message }}
          ></p>
          {banner__dismissible ? (
            <button
              aria-label="close notification banner"
              className="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>dismiss banner</title>
                <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    );
  case "inline":
    banner_msg =
      "This is a new web page. <a href='" +
      banner__inline_href +
      "' className='vf-link'>Complete our quick survey</a> to help us make it better.";
    return (
      <div className="vf-banner vf-banner--phase">
        <div className="vf-banner__content">
          <p
            className="vf-banner__text"
            dangerouslySetInnerHTML={{ __html: banner_msg }}
          ></p>
        </div>
      </div>
    );
  case "fixed":
    banner_msg =
      "This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a className='vf-banner__link' href='JavaScript:Void(0);'>Privacy Notice</a> and <a className='vf-banner__link' href='JavaScript:Void(0);'>Terms Of Use</a>.";
    return (
      <div
        className="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
        data-vf-js-banner
        data-vf-js-banner-state="dismissible"
        data-vf-js-banner-button-text={banner__text}
        data-vf-js-banner-cookie-name={data_service_id}
        data-vf-js-banner-cookie-version={data_protection_version}
        data-vf-js-banner-extra-button="<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>"
        data-vf-js-banner-auto-accept="false"
      >
        <div className="vf-banner__content | vf-grid" data-vf-js-banner-text>
          <p
            className="vf-banner__text vf-banner__text--lg"
            dangerouslySetInnerHTML={{ __html: banner_msg }}
          ></p>
        </div>
      </div>
    );
  case "top":
    banner_msg =
      "This is the new EMBL.org <a href='" +
      banner__inline_href +
      "' className='vf-banner__link'>Complete our quick survey</a> to help us make it better.";
    return (
      <div
        className="vf-banner vf-banner--fixed vf-banner--top vf-banner--phase"
        data-vf-js-banner
        data-vf-js-banner-state="dismissible"
        data-vf-js-banner-button-text="Close notice"
        data-vf-js-banner-button-theme="primary"
      >
        <div className="vf-banner__content" data-vf-js-banner-text>
          <span className="vf-badge vf-badge--primary">BETA</span>
          <p
            className="vf-banner__text"
            dangerouslySetInnerHTML={{ __html: banner_msg }}
          ></p>
        </div>
      </div>
    );
  default:
    return false;
  }
}

export default VfBanner;
