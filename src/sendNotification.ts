import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendNotification(subject: string, message: string) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Notification sent:", subject);
  } catch (error: any) {
    console.error("Error sending notification:", error.message);
  }
}
