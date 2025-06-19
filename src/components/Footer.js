import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/anchmarmarine/" target="_blank" rel="noopener noreferrer"><InstagramIcon /> </a>
        <a href="mailto:info@anchmarmarine.com" target="_blank" rel="noopener noreferrer" ><EmailIcon /> </a>
       <a href="https://www.linkedin.com/company/anchmar-marine-ve-mühendislik-danışmanlık-hizmetleri/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><LinkedInIcon />
      </a>
      </div>
      <p> &copy; 2025 anchmarine.com</p>
    </div>
  );
}

export default Footer;