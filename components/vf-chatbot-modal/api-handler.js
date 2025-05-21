export class LLMApiHandler {
  constructor() {
    // You'll need to sign up at Hugging Face and get your API token
    // https://huggingface.co/settings/tokens
    this.API_TOKEN = "";
    this.API_URL = "https://api.mistral.ai/v1/chat/completions";
      // "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";
  }

  async generateResponse(message) {
    console.log("Generating response for:", message); // Debug log

    try {
      const response = await fetch(this.API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.API_TOKEN}`,
          "Content-Type": "application/json"
        },
        data: JSON.stringify({
          "messages": [{"role": "user", "content": message}],
          "model": "mistral-small-latest",
        })
      });

      console.log("API response status:", response.status); // Debug log

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error:", errorText); // Debug log
        throw new Error(`API request failed: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log("API response data:", data); // Debug log

      return {
        html: this.formatResponse(data[0].generated_text)
      };
    } catch (error) {
      console.error("LLM API Error:", error); // Debug log
      throw error;
    }
  }

  formatResponse(text) {
    if (!text) return "<p>No response generated</p>";
    return text
      .split("\n")
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");
  }
}
