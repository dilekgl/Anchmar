import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Sadece POST istekleri kabul edilir.' });
  }

  const { name, surname, number, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.anchmarmarine.com",
    port: 587,          // 587 TLS portu (daha yaygın)
    secure: false,      // TLS için false olmalı
    auth: {
      user: process.env.MAIL_USER,  // info@anchmarmarine.com
      pass: process.env.MAIL_PASS,  // e-posta şifren
    },
    tls: {
      rejectUnauthorized: false     // Gerekirse ekle, çoğu durumda faydalı olur
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name} ${surname}" <${process.env.MAIL_USER}>`, // Gönderen kendi domain mailin olmalı
      replyTo: email,  // Cevaplar kullanıcı mailine gitsin
      to: process.env.MAIL_TO || process.env.MAIL_USER, // Alıcı mail adresi
      subject: `İletişim Formu - ${name} ${surname}`,
      text: `
Yeni bir mesaj geldi:

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
