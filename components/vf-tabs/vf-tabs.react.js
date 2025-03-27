/*
 * vf-tabs react component
 * See vf-extensions-react for usage guidance
 *
 */
import { useEffect } from "react";
import { vfTabs } from "@visual-framework/vf-tabs/vf-tabs.js";

function VfTabs(tabsData) {
  useEffect(() => {
    vfTabs();
  }, []);

  return (
    <>
      <div className="vf-tabs">
        <ul className="vf-tabs__list" data-vf-js-tabs>
          {Object.entries(tabsData).map(tab_forlink => {
            return (
              <li className="vf-tabs__item" key={tab_forlink[0]}>
                <a
                  className="vf-tabs__link"
                  href={`#vf-tabs__section--${tab_forlink[1][1].tab_number}`}
                  dangerouslySetInnerHTML={{
                    __html: tab_forlink[1][0].tab_title
                  }}
                ></a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="vf-tabs-content" data-vf-js-tabs-content>
        {Object.entries(tabsData).map(tab_forsection => {
          return (
            <section
              className="vf-tabs__section"
              id={`vf-tabs__section--${tab_forsection[1][1].tab_number}`}
              key={tab_forsection[0]}
            >
              {tab_forsection[1][2].tab_heading !== "" ? (
                <h2
                  dangerouslySetInnerHTML={{
                    __html: `${tab_forsection[1][2].tab_heading}`
                  }}
                ></h2>
              ) : null}
              <p
                dangerouslySetInnerHTML={{
                  __html: `${tab_forsection[1][3].tab_content}`
                }}
              ></p>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default VfTabs;
