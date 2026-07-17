/*
 * vf-hero react component
 * See vf-extensions-react for usage guidance
 *
 */

function VfHero({
  id,
  vf_hero_heading,
  vf_hero_heading_href,
  vf_hero_subheading,
  vf_hero_text = [],
  vf_hero_link_text,
  vf_hero_link_href,
  vf_hero_image,
  vf_hero_image_size,
  vf_hero_image_src,
  vf_hero_image_mobile_src,
  vf_hero_image_large_src,
  vf_hero_image_alt,
  vf_hero_image_width = "1920",
  vf_hero_image_height = "1080",
  vf_hero_image_fetchpriority = "high",
  vf_hero_image_loading = "eager",
  vf_hero_image_sizes,
  vf_hero_kicker,
  vf_hero_heading_additional,
  modifier_class
}) {
  const hasResponsiveMedia =
    !!vf_hero_image_src ||
    !!vf_hero_image_mobile_src ||
    !!vf_hero_image_large_src;
  const classNames = `vf-hero${
    hasResponsiveMedia ? " vf-hero--has-media" : ""
  } vf-u-fullbleed ${modifier_class || ""}`;
  const styles = {
    ...(vf_hero_image && { "--vf-hero--bg-image": vf_hero_image }),
    ...(vf_hero_image_size && { "--vf-hero--bg-image-size": vf_hero_image_size })
  };
  const attributes = {
    ...(id && { id })
  };

  return (
    <section
      {...attributes}
      role="banner"
      className={classNames}
      style={styles}
    >
      {hasResponsiveMedia ? (
        <picture className="vf-hero__media">
          {vf_hero_image_large_src ? (
            <source
              media="(min-width: 1600px)"
              srcSet={vf_hero_image_large_src}
            />
          ) : null}
          {vf_hero_image_mobile_src ? (
            <source media="(max-width: 767px)" srcSet={vf_hero_image_mobile_src} />
          ) : null}
          <img
            className="vf-hero__image"
            src={vf_hero_image_src || vf_hero_image_mobile_src}
            {...(vf_hero_image_sizes && { sizes: vf_hero_image_sizes })}
            alt={vf_hero_image_alt || ""}
            width={vf_hero_image_width}
            height={vf_hero_image_height}
            loading={vf_hero_image_loading}
            fetchPriority={vf_hero_image_fetchpriority}
            decoding="async"
          />
        </picture>
      ) : null}
      <div className="vf-hero__content | vf-box | vf-stack vf-stack--400">
        {vf_hero_kicker ? (
          <p className="vf-hero__kicker">{vf_hero_kicker}</p>
        ) : null}
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
        ) : null}
        {vf_hero_heading_additional ? (
          <p className="vf-hero__kicker">{vf_hero_heading_additional}</p>
        ) : null}
        {vf_hero_subheading ? (
          <p className="vf-hero__subheading">{vf_hero_subheading}</p>
        ) : null}
        {vf_hero_text.length > 0 &&
          vf_hero_text.map((text, index) => (
            <p key={index} className="vf-hero__text">
              {text}
            </p>
          ))}
        {vf_hero_link_text && vf_hero_link_href ? (
          <a className="vf-hero__link" href={vf_hero_link_href}>
            {vf_hero_link_text}
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default VfHero;
