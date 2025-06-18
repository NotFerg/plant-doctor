import { handleGeminiChat } from "../src/services/controllers/geminiController";

export default async function handler(req, res) {
  try {
    await handleGeminiChat(req, res);
  } catch (err) {
    console.err(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
