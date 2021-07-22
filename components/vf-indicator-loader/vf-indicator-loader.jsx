// vf-indicator-loader for React
// See vf-extensions-react for usage guidance

import React from "react";
import "./vf-indicator-loader.scss";

export function VFLoader({ container = false }) {
  return container ? (
    <div className="vf-box">
      <div className="vf-indicator-loader--spinner__container">
        <_VFLoader />
      </div>
    </div>
  ) : (
    <_VFLoader />
  );
}

function _VFLoader() {
  return <div className="vf-indicator-loader--spinner__circle"></div>;
}
