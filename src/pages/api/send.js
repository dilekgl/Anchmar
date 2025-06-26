// pages/api/send.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Sadece POST istekleri kabul edilir.' });
  }

  const { name, surname, number, email, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Anchmar Marine <info@anchmarmarine.com>',
      to: 'info@anchmarmarine.com', // veya info@anchmarmarine.com
      reply_to: email,
      subject: `Yeni Mesaj - ${name} ${surname}`,
      text: `
Ad: ${name}
Soyad: ${surname}
Telefon: ${number}
E-posta: ${email}

Mesaj:
${message}
      `,
    });

    return res.status(200).json({ message: 'Mesaj başarıyla gönderildi!' });
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    return res.status(500).json({ message: 'Mesaj gönderilemedi.' });
  }
}
