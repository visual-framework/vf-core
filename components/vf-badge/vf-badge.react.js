import PropTypes from "prop-types";

const VfBadge = ({
  text,
  badge_href,
  theme,
  style,
  override_class,
  html,
  id
}) => {
  const classNames = [
    "vf-badge",
    theme && `vf-badge--${theme}`,
    style &&
      style
        .split(",")
        .map(s => `vf-badge--${s}`)
        .join(" "),
    override_class
  ]
    .filter(Boolean)
    .join(" ");

  if (badge_href) {
    return (
      <a href={badge_href} className={classNames} id={id}>
        {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}
      </a>
    );
  }

  return (
    <span
      role="status"
      className={classNames}
      id={id}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    >
      {!html && text}
    </span>
  );
};

VfBadge.propTypes = {
  text: PropTypes.string,
  badge_href: PropTypes.string,
  theme: PropTypes.string,
  style: PropTypes.string,
  override_class: PropTypes.string,
  html: PropTypes.string,
  id: PropTypes.string
};

export default VfBadge;
