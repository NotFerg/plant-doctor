const {
  handleGeminiChat,
} = require("../src/services/controllers/geminiController.js");

module.exports = async function handler(req, res) {
  try {
    return await handleGeminiChat(req, res);
  } catch (error) {
    console.error("Handler error:", error);
    return res.status(500).json({ error: "Function invocation failed" });
  }
};
