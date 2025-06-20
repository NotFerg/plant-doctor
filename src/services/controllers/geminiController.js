import { GoogleGenAI } from "@google/genai";
import { PLANT_ANALYSIS_PROMPT } from "../utils/prompt.js";
import dotenv from "dotenv";
dotenv.config();

const { Blob } = await import("fetch-blob");
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const handleGeminiChat = async (req, res) => {
  const { base64Image, mimeType } = req.body;

  if (!base64Image) {
    return res.status(400).json({ error: "Missing image file" });
  }

  try {
    const cleanedBase64 = base64Image.replace(/^data:.*;base64,/, "");
    const buffer = Buffer.from(cleanedBase64, "base64");

    const blob = new Blob([buffer], { type: mimeType });

    let normalizedMimeType = mimeType;
    if (mimeType === "image/jpg") {
      normalizedMimeType = "image/jpeg";
    }
    const fileName = `upload.${normalizedMimeType.split("/")[1]}`;

    const file = await ai.files.upload({
      file: blob,
      config: {
        fileName,
        mimeType,
      },
    });

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.2,
      },
      contents: [
        {
          parts: [
            { text: PLANT_ANALYSIS_PROMPT },
            {
              fileData: {
                fileUri: file.uri,
                mimeType,
              },
            },
          ],
        },
      ],
    });

    const text = result.text;
    res.status(200).json({ reply: text });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ error: "Failed to process image" });
  }
};

// async function main() {
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.0-flash-001',
//     contents: 'Why is the sky blue?',
//   });
//   console.log(response.text);
// }

// main();
