import express from "express";
import { handleGeminiChat } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/gemini-chat", handleGeminiChat);

export default router;
