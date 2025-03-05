import PropTypes from "prop-types";
import { vfNunjucksEnv } from "@visual-framework/vf-extensions-react/vf-extensions-react.js";

export const VfCard = ({
  variant,
  newTheme,
  card_image,
  card_text,
  card_image__alt,
  card_title
}) => {
  const templateProps = {
    variant,
    newTheme,
    card_image,
    card_text,
    card_image__alt,
    card_title
  };

  const html = vfNunjucksEnv.render("vf-card", templateProps);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

VfCard.propTypes = {
  variant: PropTypes.string,
  newTheme: PropTypes.string,
  card_image: PropTypes.string,
  card_text: PropTypes.string,
  card_image__alt: PropTypes.string,
  card_title: PropTypes.string
};
