import React, { useState } from 'react';
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Sunucuya bağlanılamadı.");
    }
  };

  return (
    
    <div className="contact">
        <div
        className="leftSide">
          <h2>Adresimiz</h2>
          <p>Anch Marine<br />Örnek Mah. Sahil Cad. No:123<br />İstanbul, Türkiye</p>
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.8007757760897!2d29.249463811398506!3d41.01576267123004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1eb845c64c1%3A0xd356a9a0e6ce9afc!2sYunus%20Emre%2C%20Billur%20Sk.%20No%3A9%2C%2034791%20Sancaktepe%2F%C4%B0stanbul!5e1!3m2!1str!2str!4v1749324929231!5m2!1str!2str" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        </div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form onSubmit={handleSubmit}>
          <label>Adınız</label>
          <input name="name" value={formData.name} onChange={handleChange} type="text" />
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} type="email" />
          <label>Mesaj</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="6" />
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
