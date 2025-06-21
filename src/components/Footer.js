import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // varsa
function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        {/* SOL BLOK */}
        <div className="footerLeft">
          <p><strong>Telefon:</strong> +90 537 649 78 13</p>
          <p><strong>Email:</strong> info@anchmarmarine.com</p>
          <p><strong>Adres:</strong> Datça / Muğla</p>
          
          <div className="footerLinks">
            <Link to="/">Anasayfa</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
            <Link to="/iletisim">İletişim</Link>
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kvkk">KVKK</Link>
          </div>
        </div>

        {/* ORTA BLOK (LOGO + İSİM) */}
        <div className="footerCenter">
          <div className="footerLogoContainer">
            <div className="footerLogoText">Anchmar Marine</div>
            <img
              src={logo}
              alt="Anchmar Marine Logo"
              className="footerLogoImage"
            />
          </div>
        </div>

        {/* SAĞ BLOK */}
        <div className="footerRight">
          <p className="footerAbout">
            Denizcilik alanında sürdürülebilir ve güvenilir çözümler sunuyoruz.
          </p>
          <div className="socialMedia">
            <a href="https://www.instagram.com/anchmarmarine/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="mailto:info@anchmarmarine.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/company/anchmar-marine-ve-mühendislik-danışmanlık-hizmetleri/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2025 anchmarine.com</p>
    </div>
  );
}



export default Footer;
