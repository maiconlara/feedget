import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1b32b58cdb2516",
    pass: "f0011711308707",
  },
});
export class NodemailerMail implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <hello@feedget.com>",
      to: "Maicon Lara <maiconlaracontato@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
