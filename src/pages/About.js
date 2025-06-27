import React, { useEffect, useRef, useState } from 'react';
import "../styles/About.css";
import bakımImage from '../assets/bakim3.png'; // Görseli import ettik

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div className="about">
      <img src={bakımImage} alt="bakım görseli" className="aboutBackground" />
      <div className="aboutTop"></div>
      <div
        className={`aboutBottom ${isVisible ? 'visible' : ''}`}
        ref={aboutRef}
      >
        <h1>Biz Kimiz?</h1>
        <p>
          Deniz tutkusuyla yola çıkan firmamız, bireysel yat sahiplerine yönelik yenilikçi ve sürdürülebilir
          çözümler sunma misyonuyla kurulmuştur. Yedek parça temini,
          bakım-onarım hizmetleri ve teknik danışmanlık alanlarında uzmanlaşmış bir ekibe sahibiz. 
          Her müşterimizin ihtiyaçlarını anlamak ve onlara özel çözümler sunmak için çalışıyoruz.
        </p> 
        <p> 
          Müşteri memnuniyetini ön planda tutarak, yüksek kaliteli hizmetlerimizle 
          sektördeki en güvenilir isimlerden biri olmayı hedefliyoruz. Uzman teknisyenlerimiz, her tekneye özel yaklaşımımızla, 
          bakım ve onarım süreçlerini titizlikle yürütmektedir. Amacımız, yat sahiplerinin denizde güvenli, 
          konforlu ve keyifli bir deneyim yaşamalarını sağlamaktır.
        </p>
        <p>
          Gelişen teknoloji ve yenilikçi çözümlerle, sektördeki en yüksek standartları belirlemeyi amaçlıyoruz. Gelecekte, denizcilik alanında en çok tercih edilen ve saygı duyulan marka olma vizyonumuzla, her adımda mükemmelliği arıyoruz.
          Bizimle birlikte, deniz yolculuğunuzda güvenilir bir ortak edinin!
        </p>
        <h1>Vizyonumuz</h1>
        <p>
          Yedek parça ve bakım-onarım sektöründe lider konumda olmak,
          deniz tutkunlarının güvenli ve keyifli bir deneyim yaşamasını sağlamak için yenilikçi
          ve sürdürülebilir çözümler sunmayı hedefliyoruz. 
          Müşteri memnuniyetini en üst düzeyde tutarak, 
          sektördeki en yüksek standartları belirleyen bir marka olmayı ve her tekne sahibinin güvenilir
          bir çözüm ortağı olarak bizi tercih etmesini sağlamayı amaçlıyoruz.
        </p>
        <h1>Misyonumuz</h1>
        <p>
          Bireysel yat sahiplerine denizde güvenli ve sorunsuz bir deneyim sunmayı amaçlayarak, 
          bakım-onarım ve yedek parça alanlarında özel, güvenilir ve sürdürülebilir çözümler geliştiriyoruz.
          Her tekneye ve her müşteriye özgü bir yaklaşım benimseyerek, uzmanlığımızı yüksek hizmet kalitesiyle bir araya getiriyoruz. 
          Misyonumuz, yat sahiplerinin ihtiyaçlarını derinlemesine anlayıp, 
          bu ihtiyaçları eksiksiz bir şekilde karşılayarak güvenilir bir çözüm ortağı olmaktır.
        </p>
      </div>
    </div>
  );
}

export default About;
