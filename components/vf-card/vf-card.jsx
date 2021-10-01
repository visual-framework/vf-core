import { VfClassNormalize } from "../../tools/vf-extensions-react/vf-extensions-react";

export function VFCard({
  card_image,
  card_image__alt,
  card_custom_aspect_ratio,
  card_heading,
  card_href,
  card_subheading,
  card_text,
  variant,
  modifiers,
  override_class,
  id,
  theme,
  newTheme,
}) {
  const cardClasses = VfClassNormalize(
    "vf-card",
    theme && `vf-card-theme--${theme}`,
    newTheme &&
      (newTheme === "primary" ? "vf-card--brand" : `vf-card--${newTheme}`),
    variant && `vf-card--${variant}`,
    modifiers,
    override_class
  );
  return (
    <article
      id={id}
      className={cardClasses}
      style={{ "--vf-card__image--aspect-ratio": card_custom_aspect_ratio }}
    >
      {card_image && (
        <img
          src={card_image}
          alt={card_image__alt}
          className="vf-card__image"
          loading="lazy"
        />
      )}
      <div className="vf-card__content | vf-stack vf-stack--400">
        <h3 className="vf-card__heading">
          <a className="vf-card__link" href={card_href}>
            {card_heading}
            <svg
              aria-hidden="true"
              className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end"
              width="1em"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
            </svg>
          </a>
        </h3>
        {card_subheading && (
          <p className="vf-card__subheading">{card_subheading}</p>
        )}
        {card_text && <p className="vf-card__text">{card_text}</p>}
      </div>
    </article>
  );
}

VFCard.Container = function VFCardContainer({ children }) {
  return (
    <section className="vf-card-container">
      <div className="vf-card-container__inner">{children}</div>
    </section>
  );
};
