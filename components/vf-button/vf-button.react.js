/*
 * vf-button react component
 * See vf-extensions-react for usage guidance
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export const VfButton = ({
  text,
  theme,
  id,
  style,
  size,
  outline = false,
  override_class = "",
  ...rest
}) => {
  const classNames = [
    "vf-button",
    theme && `vf-button--${theme}`,
    outline && "vf-button--outline",
    size && `vf-button--${size}`,
    style && [style].flat().map(item => `vf-button--${item}`),
    override_class
  ]
    .flat(3)
    .filter(items => items)
    .join(" ");

  const attributes = {
    ...(id && { id })
  };

  return React.createElement(
    'button',
    {
      className: classNames,
      ...attributes,
      ...rest
    },
    text
  );
};

VfButton.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  size: PropTypes.string,
  outline: PropTypes.bool,
  override_class: PropTypes.string
};
