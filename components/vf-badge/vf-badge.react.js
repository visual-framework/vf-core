/*
 * vf-button react component
 * See vf-extensions-react for usage guidance
 *
 */

function VfBadge({ id, badge_href, text, html, theme, style, override_class }) {
  /* Conditional styles, strings, nullables, arrays of styles */
  const classNames = [
    "vf-badge",
    theme && `vf-badge--${theme}`,
    style && style.split(",").map(item => `vf-badge--${item}`),
    override_class && `| ${override_class}`
  ]
    .flat(3) //flattens nested arrays
    .filter(items => items) //removes falsy items
    .join(" ");

  /* Inner content of the tag based on whether HTML or Text */
  const content = html ? html : text;

  /* Conditional attributes will be only present iff they exist */
  const attributes = {...(id && { id })};

  /* Embed values from above and conditionally return anchor tag or span */
  if (badge_href && badge_href !== "") {
    return (
      <a {...attributes} href={badge_href} className={classNames}>{content}</a>
    );
  } else {
    return (
      <span {...attributes} className={classNames}>
        {content}
      </span>
    );
  }
}

export default VfBadge;
