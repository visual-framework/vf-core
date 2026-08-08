import React from 'react';
import PropTypes from 'prop-types';

const VfCard = ({
  card_href,
  card_title,
  card_heading,
  card_subtitle,
  card_subheading,
  card_text,
  card_image,
  card_image__alt,
  card_custom_aspect_ratio,
  theme,
  newTheme,
  variant,
  id,
  modifiers,
  override_class
}) => {
  const classNames = [
    'vf-card',
    theme && `vf-card-theme--${theme}`,
    newTheme && newTheme === 'primary' ? 'vf-card--brand' : newTheme && `vf-card--${newTheme}`,
    variant && `vf-card--${variant}`,
    modifiers,
    override_class
  ]
    .filter(Boolean)
    .join(' ');

  const style = card_custom_aspect_ratio
    ? { '--vf-card__image--aspect-ratio': card_custom_aspect_ratio }
    : {};

  const ArrowIcon = () => React.createElement(
    'svg',
    {
      'aria-hidden': 'true',
      className: 'vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end',
      width: '1em',
      height: '1em',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d: 'M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z',
      fill: 'currentColor',
      fillRule: 'nonzero'
    })
  );

  const headingText = card_title || card_heading;

  return React.createElement(
    'article',
    {
      className: classNames,
      id,
      style
    },
    card_image &&
      React.createElement('img', {
        src: card_image,
        alt: card_image__alt || '',
        className: 'vf-card__image',
        loading: 'lazy'
      }),
    React.createElement(
      'div',
      { className: 'vf-card__content | vf-stack vf-stack--400' },
      headingText &&
        React.createElement(
          'h3',
          { className: 'vf-card__heading' },
          card_href
            ? React.createElement(
                'a',
                { className: 'vf-card__link', href: card_href },
                headingText,
                React.createElement(ArrowIcon)
              )
            : headingText
        ),
      card_subheading &&
        React.createElement('p', { className: 'vf-card__subheading' }, card_subheading),
      card_subtitle &&
        React.createElement(
          'p',
          { className: 'vf-card__subtitle', role: 'doc-subtitle' },
          card_subtitle
        ),
      card_text && React.createElement('p', { className: 'vf-card__text' }, card_text)
    )
  );
};

VfCard.propTypes = {
  card_href: PropTypes.string,
  card_title: PropTypes.string,
  card_heading: PropTypes.string,
  card_subtitle: PropTypes.string,
  card_subheading: PropTypes.string,
  card_text: PropTypes.string,
  card_image: PropTypes.string,
  card_image__alt: PropTypes.string,
  card_custom_aspect_ratio: PropTypes.string,
  theme: PropTypes.string,
  newTheme: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.string,
  modifiers: PropTypes.string,
  override_class: PropTypes.string
};

export default VfCard;
