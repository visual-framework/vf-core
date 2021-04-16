// vf-back-to-top for React
// See vf-extensions-react for usage guidance

import React, { useEffect, useState } from "react";
import "./vf-back-to-top.scss";

export function VFBackToTop({
  text = "Back to top",
  type = "inline",
  scrollToId = "",
}) {
  const [visible, setVisible] = useState(false);

  // On scrolling, show or hide "Back to top" link when scroll is past one full screen height
  useEffect(() => {
    let scrollHandler;
    if (type === "floating") {
      scrollHandler = function () {
        // current scrollY value is past one full screen height?
        const isScrollPastWindowHeight = window.scrollY >= window.innerHeight;
        // toggle visibility
        setVisible(isScrollPastWindowHeight);
      };
      window.addEventListener("scroll", scrollHandler);
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [type]);

  const handleOnClick = () => {
    // Get the element with given id or body if no id provided
    const targetElement = scrollToId
      ? document.getElementById(scrollToId)
      : document.body;
    // Scroll to the element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`vf-back-to-top vf-back-top--${type}`}>
      {visible && (
        <button
          onClick={handleOnClick}
          className="vf-button vf-button--primary vf-button--sm"
          aria-label=" Back to top "
        >
          <span className="vf-button__text | vf-u-sr-only">Back to top</span>
          <Icon /> {text}
        </button>
      )}
    </div>
  );
}

// icon component
const Icon = () => (
  <svg
    className="vf-icon vf-icon--search-btn | vf-button__icon"
    viewBox="0 0 140 140"
    width="16"
    height="16"
  >
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path
        d="M23.421,11.765,13.768.8A2.641,2.641,0,0,0,12,0a2.645,2.645,0,0,0-1.768.8L.579,11.765A1.413,1.413,0,1,0,2.7,13.632l7.45-8.466a.25.25,0,0,1,.437.166V22.587a1.413,1.413,0,1,0,2.826,0V5.332a.25.25,0,0,1,.438-.165L21.3,13.632a1.413,1.413,0,1,0,2.121-1.867Z"
        fill="#ffffff"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
      ></path>
    </g>
  </svg>
);
