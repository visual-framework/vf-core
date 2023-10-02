/*
 * vf-blockquote react component
 * See vf-extensions-react for usage guidance
 *
 */

function VfBlockquote({id, blockquote_text, text, html,blockquote_author, blockquote_author_href,  blockquote_author_details, blockquote_author_imageurl, override_class} ) {

    /* Conditional styles, strings, nullables, arrays of styles */
    let classNames = "vf-blockquote";
    classNames += override_class ? override_class : '';
  
    /* Inner content of the tag based on whether HTML or Text */
    const content = blockquote_text ? blockquote_text : html ? html : text;
  
    /* Conditional attributes will be only present iff they exist */
    const attributes = {
        ...(id && { id })
    };
    return (
        <blockquote  {...attributes}  className={classNames}>
        <div className="vf-blockquote-flex-container">
            { 
                blockquote_author_imageurl 
                ? 
                <div className="vf-blockquote_author__image">
                <img src={blockquote_author_imageurl} alt="" loading="lazy"/>
                </div>
                : ''
             }
            <div>
            <div>{content}</div>

            <footer>
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
                <div className="vf-blockquote_author_details">{ blockquote_author_details }</div>
                : ''
            }
            </footer>
            </div>
        </div>
        </blockquote>
    )
  }
  
  export default VfBlockquote;
  