const express = require("express");
const { handleGeminiChat } = require("../controllers/geminiController.js");

const router = express.Router();

router.post("/gemini-chat", handleGeminiChat);

module.exports = router;
