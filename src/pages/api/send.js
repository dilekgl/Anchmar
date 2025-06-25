import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Yalnızca POST destekleniyor.' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.anchmarmarine.com',
    port: 465,
    secure: true, // SSL kullanılıyor çünkü port 465
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Kullanıcıdan gelen isim ve e-posta
      to: process.env.MAIL_TO, // Sana ulaşacak e-posta (info@anchmarmarine.com olabilir)
      subject: `İletişim Formu Mesajı - ${name}`,
      text: `
Yeni iletişim formu mesajı:

Gönderen: ${name}
E-posta: ${email}

Mesaj:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail gönderim hatası:', error);
    return res.status(500).json({ success: false, error: 'Gönderim sırasında hata oluştu.' });
  }
}
