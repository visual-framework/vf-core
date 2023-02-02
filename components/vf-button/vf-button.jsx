/*
 * vf-button react component
 * See vf-extensions-react for usage guidance
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { VfClassNormalize } from "../../tools/vf-extensions-react/vf-extensions-react";

function VfButton({
  text,
  theme,
  id,
  style,
  size,
  outline = false,
  override_class = "",
  ...rest
}) {
  /* Conditional tag */
  const Tag = "button";

  /* Conditional styles, strings, nullables, arrays of styles */
  const classNames = VfClassNormalize(
    "vf-button",
    theme && `vf-button--${theme}`,
    outline && 'vf-button--outline',
    size && `vf-button--${size}`,
    style && [style].flat().map((item) => `vf-button--${item}`),
    override_class
  );

  /* Conditional attributes will be only present iff they exist */
  const attributes = {
    ...(id && { id })
  };

  return (
    <Tag className={classNames} {...attributes} {...rest}>
      {text}
    </Tag>
  );
}

export default React.memo(VfButton);

VfButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(["primary", "outline", "tertiary"])),
    PropTypes.string,
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  override_class: PropTypes.string,
};
