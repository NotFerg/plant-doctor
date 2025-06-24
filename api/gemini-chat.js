import { handleGeminiChat } from "./controllers/geminiController.js";

export default async function handler(req, res) {
  try {
    return await handleGeminiChat(req, res);
  } catch (error) {
    return res.status(500).json({ error: "Function invocation failed" });
  }
}
