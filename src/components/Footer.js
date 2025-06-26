import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "../styles/Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        
        {/* SOL BLOK - Bize Ulaşın */}
        <div className="footerLeft">
          <h4>Bize Ulaşın</h4>
          <p>
            <WhatsAppIcon />
            <a
              href="https://wa.me/905376497813"
              target="_blank"
              rel="noopener noreferrer"
            >
              +90 537 649 78 13
            </a>
          </p>
          <p>
            <MailOutlineIcon />
            <a href="mailto:info@anchmarmarine.com">info@anchmarmarine.com</a>
          </p>
          <p>
            <LocationOnIcon />
            Datça / Muğla
          </p>

          <div className="socialMedia">
            <a href="https://www.instagram.com/anchmarmarine/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="mailto:info@anchmarmarine.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/company/anchmar-marine-ve-mühendislik-danışmanlık-hizmetleri/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          </div>
        </div>

        {/* ORTA BLOK - Logo */}
        <div className="footerCenter">
          <div className="footerLogoContainer">
            <img src={logo} alt="Anchmar Marine Logo" className="footerLogoImage" />
            <div className="footerLogoText">Anchmar Marine</div>
          </div>
        </div>

        {/* SAĞ BLOK - Sayfa Linkleri */}
        <div className="footerRight">
          <h4>Sayfalar</h4>
          <div className="footerLinks">
            <Link to="/">Anasayfa</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
            <Link to="/iletisim">İletişim</Link>
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kvkk">KVKK</Link>
          </div>
        </div>
      </div>

      <p className="copyright">© 2025 anchmarine.com</p>
    </div>
  );
}

export default Footer;
