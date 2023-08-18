import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute({ type, comment, screenshot }: SubmitFeedbackRequest) {
    if (!type) {
      throw new Error("Type should not be empty.");
    }
    if (!comment) {
      throw new Error("Comment should not be empty.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do Feedback: ${type} <p>`,
        `<p>Comentário: ${comment} <p>`,
        `<img src="${screenshot}"> <img>`,
        `<div>`,
      ].join("\n"),
    });
  }
}
