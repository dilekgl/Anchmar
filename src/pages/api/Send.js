import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Yalnızca POST istekleri desteklenir" });
  }

  const { name, surname, number, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name} ${surname}" <${email}>`,
      to: "info@anchmarmarine.com",
      subject: "Yeni İletişim Formu Mesajı",
      html: `
        <h3>Yeni Mesaj</h3>
        <p><strong>Ad Soyad:</strong> ${name} ${surname}</p>
        <p><strong>Telefon:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    res.status(500).json({ message: "Mesaj gönderilirken bir hata oluştu." });
  }
}
