import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.post("/services/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_EMAIL,
    subject: `[PLANT DOCTOR CONTACT FORM] ${subject}`,
    text: `From: ${name} (${email}\n\n${message})`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: `Failed to send email Error:${err}` });
  }
});

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
