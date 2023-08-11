import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("HTTP Server Running!");
});

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1b32b58cdb2516",
    pass: "f0011711308707",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <hello@feedget.com>",
    to: "Maicon Lara <maiconlaracontato@gmail.com>",
    subject: "New feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do Feedback: ${type} <p>`,
      `<p>Comentário: ${comment} <p>`,
      `<div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});
