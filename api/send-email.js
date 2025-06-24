import { sendEmail } from "./controllers/emailController.js";

export default async function handler(req, res) {
  try {
    return await sendEmail(req, res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
