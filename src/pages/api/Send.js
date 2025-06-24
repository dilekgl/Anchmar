import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Sadece POST istekleri desteklenir" });
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
      from: `"${name} ${surname}" <${process.env.MAIL_USER}>`, // Gönderici: senin e-posta
      to: "info@anchmarmarine.com",                            // Alıcı: senin şirket mailin
      replyTo: email,                                          // Yanıtla → kullanıcıya gider
      subject: "İletişim Formu Mesajı",
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name} ${surname}</p>
        <p><strong>Telefon:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    res.status(500).json({ message: "Mesaj gönderilirken bir hata oluştu." });
  }
}
