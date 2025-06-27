import React, { useState } from 'react';
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    number: '',
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
      const res = await fetch("src/pages/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setFormData({
          name: '',
          surname: '',
          number: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      alert("Sunucuya bağlanılamadı.");
    }
  };

  return (
    <div className="contact">
      <div className="leftSide">
        <h2>Adresimiz</h2>
        <p>Anchmar Marine<br />Reşadiye Mahallesi, Knidos Sokak No:8/C <br />Datça/Muğla, Türkiye</p>
        <div className="map-container">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.951417072202!2d27.65947161118002!3d36.751970172145214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be24b747656dc7%3A0xf6e377a7adb88b22!2zUmXFn2FkaXllLCBLbmlkb3MgWW9sdSBObzo4IEQ6YywgNDg5MDAgRGF0w6dhL011xJ9sYQ!5e1!3m2!1str!2str!4v1751040334811!5m2!1str!2str" 
      
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-row">
            <div className="input-group">
              <label>Adınız</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text" />
            </div>
            <div className="input-group">
              <label>Soyadınız</label>
              <input name="surname" value={formData.surname} onChange={handleChange} type="text" />
            </div>
          </div>
          <label>Telefon Numaranız</label>
          <input name="number" value={formData.number} onChange={handleChange} type="tel" />
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
