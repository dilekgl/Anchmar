import React, { useEffect } from 'react';
import anaSayfa from "../assets/home.png";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    const header = document.querySelector(".Header");

    const openHeader = () => {
      if (header) header.id = "open";
    };

    const closeHeader = () => {
      if (header) header.id = "close";
    };

    // Sadece header için mouse eventleri
    if (header) {
      header.addEventListener("mouseenter", openHeader);
      header.addEventListener("mouseleave", closeHeader);
    }

    // Sayfadan çıkarken temizle
    return () => {
      if (header) {
        header.removeEventListener("mouseenter", openHeader);
        header.removeEventListener("mouseleave", closeHeader);
      }
    };
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${anaSayfa})` }}>
      <div className="headerContainer">
        <h1>Anch Marine</h1>
        <p>Yatlarınız için en iyisi</p>
      </div>
    </div>
  );
};

export default Home;
