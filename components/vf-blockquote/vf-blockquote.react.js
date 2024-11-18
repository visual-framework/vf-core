/*
 * vf-blockquote react component
 * See vf-extensions-react for usage guidance
 *
 */

function VfBlockquote({
  id,
  blockquote_text,
  text,
  html,
  blockquote_author,
  blockquote_author_href,
  blockquote_author_details,
  blockquote_author_imageurl,
  override_class,
  modifier
}) {
  /* Conditional styles, strings, nullables, arrays of styles */
  let classNames =
    modifier === "default" ? "vf-blockquote" : "vf-blockquote-small";
  classNames += override_class ? override_class : "";

  let authorImgClassNames =
    modifier === "default"
      ? "vf-profile__image vf-u-margin__right--600"
      : "vf-profile__image vf-profile--medium vf-u-margin__right--600";

  /* Inner content of the tag based on whether HTML or Text */
  const content = blockquote_text ? blockquote_text : html ? html : text;

  /* Conditional attributes will be only present iff they exist */
  const attributes = {
    ...(id && { id })
  };
  return (
    <blockquote {...attributes} className={classNames}>
      {blockquote_author_imageurl ? (
        <img
          className={authorImgClassNames}
          src={blockquote_author_imageurl}
          alt=""
          loading="lazy"
        />
      ) : (
        ""
      )}
      <div
        className={
          blockquote_author_imageurl ? "vf-blockquote-has-image" : null
        }
      >
        <div>{content}</div>

        <footer className="vf-u-margin__top--600">
          {blockquote_author_href ? (
            <a
              href={blockquote_author_href}
              className="vf-blockquote_author__link"
            >
              <div className="vf-blockquote_author">{blockquote_author}</div>
            </a>
          ) : (
            <div>{blockquote_author}</div>
          )}
          {blockquote_author_details ? (
            <div className="vf-blockquote_author__details">
              {blockquote_author_details}
            </div>
          ) : (
            ""
          )}
        </footer>
      </div>
    </blockquote>
  );
}

export default VfBlockquote;
