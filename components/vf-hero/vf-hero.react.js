/*
 * vf-hero react component
 * See vf-extensions-react for usage guidance
 *
 */

function VfHero({
  id,
  modifier_class,
  vf_hero_image,
  vf_hero_image_size,
  vf_hero_kicker,
  vf_hero_heading,
  vf_hero_heading_href,
  vf_hero_subheading,
  vf_hero_text,
  vf_hero_link_text,
  vf_hero_link_href,
  spacing,
  vf_hero_heading_additional,
}) {
  /* Conditional styles, strings, nullables, arrays of styles */

  let classNames = "vf-hero ";

  classNames += spacing !== undefined ? "vf-hero--" + spacing + " " : "";
  classNames += "| vf-u-fullbleed";
  classNames +=
    modifier_class !== undefined && modifier_class !== ""
      ? " " + modifier_class
      : "";
  const styles = {
    ...(vf_hero_image && { "--vf-hero--bg-image": vf_hero_image }),
    ...(vf_hero_image_size && {
      "--vf-hero--bg-image-size": vf_hero_image_size,
    }),
  };

  /* Conditional attributes will be only present iff they exist */
  const attributes = {
    ...(id && { id }),
  };
  if (
    vf_hero_heading_additional !== undefined &&
    vf_hero_heading_additional !== ""
  ) {
    vf_hero_kicker = vf_hero_heading_additional;
  }
  return (
    <section {...attributes} className={classNames} style={styles}>
      <div className="vf-hero__content | vf-box | vf-stack vf-stack--400">
        {vf_hero_kicker ? (
          <p
            className="vf-hero__kicker"
            dangerouslySetInnerHTML={{ __html: vf_hero_kicker }}
          ></p>
        ) : (
          ""
        )}

        {vf_hero_heading ? (
          <h1 className="vf-hero__heading">
            {vf_hero_heading_href ? (
              <a className="vf-hero__heading_link" href={vf_hero_heading_href}>
                {vf_hero_heading}
              </a>
            ) : (
              vf_hero_heading
            )}
          </h1>
        ) : (
          ""
        )}

        {vf_hero_subheading ? (
          <p className="vf-hero__subheading">{vf_hero_subheading}</p>
        ) : (
          ""
        )}
        {vf_hero_text !== undefined
          ? vf_hero_text.map((hero_text) => (
            <p
              key={id}
              className="vf-hero__text"
              dangerouslySetInnerHTML={{ __html: hero_text }}
            ></p>
          ))
          : ""}
        {vf_hero_link_href && vf_hero_link_text ? (
          <a className="vf-hero__link" href={vf_hero_link_href}>
            {vf_hero_link_text}
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                fill=""
                fillRule="nonzero"
              ></path>
            </svg>
          </a>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default VfHero;
