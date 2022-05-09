import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "36517a3a3c51ee",
    pass: "8536800f19be0c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Bruno Costa <t3cnykal@gmail.com>',
      subject,
      html: body
    })
  };
}