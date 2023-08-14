import express from "express";
import { SubmitFeedback } from "./utils/submit-feedback";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMail } from "./adapters/nodemailer/nodemailer-mail";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMail = new NodemailerMail();
  const submitFeedback = new SubmitFeedback(
    prismaFeedbacksRepository,
    nodemailerMail
  );

  await submitFeedback.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
