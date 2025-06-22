import { handleGeminiChat } from "./controllers/geminiController.js";

export default async function handler(req, res) {
  try {
    console.log("IN HERE");
    return await handleGeminiChat(req, res);
  } catch (error) {
    console.log("ERROR", error);
    console.error("Handler error:", error);
    return res.status(500).json({ error: "Function invocation failed" });
  }
}
