import { useEffect, useRef } from "react";
import { initVFChatbotSources } from "./vf-chatbot-sources.js";

export function VFChatbotSources({ sources = [] }) {
  const sourcesRef = useRef(null);

  useEffect(() => {
    if (sourcesRef.current) {
      initVFChatbotSources(sourcesRef.current);
    }
  }, []);

  return (
    <div
      ref={sourcesRef}
      className="vf-chatbot-sources"
      data-vf-js-chatbot-sources
    >
      <h3>Sources</h3>
      <ul>
        {sources.map(source => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${source.title} (opens in new tab)`}
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}