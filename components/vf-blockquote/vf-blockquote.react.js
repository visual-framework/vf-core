/*
 * vf-blockquote react component
 * See vf-extensions-react for usage guidance
 *
 */

function VfBlockquote({id, blockquote_text, text, html,blockquote_author, blockquote_author_href,  blockquote_author_details, blockquote_author_imageurl, override_class} ) {

  /* Conditional styles, strings, nullables, arrays of styles */
  let classNames = "vf-blockquote vf-u-margin__left--800";
  classNames += override_class ? override_class : '';

  /* Inner content of the tag based on whether HTML or Text */
  const content = blockquote_text ? blockquote_text : html ? html : text;

  /* Conditional attributes will be only present iff they exist */
  const attributes = {
      ...(id && { id })
  };
  return (
      <blockquote  {...attributes}  className={classNames}>
          {
              blockquote_author_imageurl
              ?
              <img className="vf-profile__image vf-u-margin__right--600" src={blockquote_author_imageurl} alt="" loading="lazy"/>
              : ''
           }
          <div>
          <div>{content}</div>

          <footer class="vf-u-margin__top--600">
          {
              blockquote_author_href
              ?
              <a href={ blockquote_author_href } className="vf-blockquote_author__link">
              <div>{ blockquote_author }</div>
              </a>
              :
              <div>{ blockquote_author }</div>
          }
          {
              blockquote_author_details
              ?
              <div className="vf-text-body--2">{ blockquote_author_details }</div>
              : ''
          }
          </footer>
          </div>
      </blockquote>
  )
}

export default VfBlockquote;
