// vf-progress-indicator for React
// See vf-extensions-react for usage guidance

import React from "react";
import "./vf-progress-indicator.scss";

export function VFProgressIndicator({ helperText = "", progressPercent = 0 }) {
  return (
    <div
      class="vf-progress-indicator"
      style={{"--vf-progress-indicator__width": width || '100%'}}
    >
      <div
        class="vf-progress-indicator__mark"
        style={{"--vf-progress-indicator__percent": progressPercent+"%"}}
      ></div>
      {helperText && (
        <p class="vf-progress-indicator__helper-text">{helperText}</p>
      )}
    </div>
  );
}
