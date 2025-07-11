import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

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
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({
      error: err.message || "Failed to send email",
    });
  }
};
