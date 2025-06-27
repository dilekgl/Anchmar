import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MissionList from '../helpers/missionList';
import anaSayfa from "../assets/home.png";
import '../styles/Home.css';



const Home = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // ilk render'da kontrol

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="home">
        <video autoPlay muted loop className="bg-video">
          <source src="/home1.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <div className="headerContainer">
          <h1>ANCHMAR MARINE</h1>
          <p>Yatlarınız İçin En İyisi</p>
        </div>
      </div>

      <div
        className={`aboutSection scroll-animate ${isVisible ? 'visible' : ''}`}
        ref={aboutRef}
      >
        <div className="aboutContent">
          <div className="aboutText">
            <h2>Biz Kimiz?</h2>
            <p>
              Deniz tutkusuyla yola çıkan firmamız, 
              bireysel yat sahiplerine yönelik yenilikçi ve sürdürülebilir çözümler sunma misyonuyla kurulmuştur. 
              Yedek parça temini, bakım-onarım hizmetleri ve teknik danışmanlık alanlarında uzmanlaşmış bir ekibe sahibiz. 
              Her müşterimizin ihtiyaçlarını anlamak ve onlara özel çözümler sunmak için çalışıyoruz.
            </p>
            <p>Müşteri memnuniyetini ön planda tutarak, 
              yüksek kaliteli hizmetlerimizle sektördeki en güvenilir isimlerden biri olmayı hedefliyoruz. </p>
            <button className="readMoreBtn"  onClick={() => window.location.href = "/hakkimizda"}>Daha Fazla Oku</button>
          </div>
          <div className="aboutImage">
            <img src={anaSayfa} alt="Anchmar Yat Görseli" />
          </div>
        </div>



        
      </div>

      <MissionList />
  
    </>
  );
};

export default Home;
