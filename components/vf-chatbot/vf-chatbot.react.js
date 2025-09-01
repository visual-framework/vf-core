import { useRef, useEffect } from "react";
import { VFChatbotFab } from "../vf-chatbot-fab/vf-chatbot-fab.react";
import { VFChatbotModal } from "../vf-chatbot-modal/vf-chatbot-modal.react";
import { VFChatbotStandalone } from "../vf-chatbot-standalone/vf-chatbot-standalone.react";
import { initVFChatbot } from "./vf-chatbot.js";
import { initVFChatbotStandalone } from "../vf-chatbot-standalone/vf-chatbot-standalone.js";

function VFChatbot({ config, ...props }) {
  const chatbotRef = useRef(null);
  const standaloneRef = useRef(null);

  useEffect(() => {
    if (chatbotRef.current) {
      initVFChatbot(config);
    } else if (standaloneRef.current) {
      initVFChatbotStandalone(config);
    }
  }, [config.type]);

  if (config.type === "modal") {
    return (
      <div ref={chatbotRef} className="vf-chatbot" data-vf-js-chatbot>
        <VFChatbotFab {...config.fabProps} />
        <VFChatbotModal config={config} />
      </div>
    );
  }
  if (config.type === "standalone") {
    return (
      <div ref={standaloneRef}>
        <VFChatbotStandalone config={config} {...props} />
      </div>
    );
  }
  return null;
}

export default VFChatbot;
