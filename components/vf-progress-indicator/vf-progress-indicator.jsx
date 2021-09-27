// vf-back-to-top for React
// See vf-extensions-react for usage guidance

import React from "react";
import "./vf-back-to-top.scss";

export function VFProgressIndicator({ helperText = "", progressPercent = 0 }) {
  return (
    <div
      class="vf-progress-indicator"
      style={{"width": width || '100%'}}
    >
      <div
        class="vf-progress-indicator__mark"
        style={{"width": progressPercent+"%"}}
      ></div>
      {helperText && (
        <div class="vf-progress-indicator__helper-text">{helperText}</div>
      )}
    </div>
  );
}
