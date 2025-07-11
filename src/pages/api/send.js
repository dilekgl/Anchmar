import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Sadece POST istekleri kabul edilir.' });
  }

  const { name, surname, number, email, message } = req.body;

  // Transporter oluştur
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // 465 portu için true
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Anchmar Marine" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,  // Kendine gönderiyorsun
      replyTo: email,             // Formu dolduran kişinin maili
      subject: `Yeni İletişim Mesajı - ${name} ${surname}`,
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
    console.error('Mail gönderim hatası:', error);
    return res.status(500).json({ message: 'Mesaj gönderilemedi.' });
  }
}
