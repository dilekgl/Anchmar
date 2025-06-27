import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Button from '@mui/material/Button';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Header.css";

const Header = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleHeader = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY < lastScrollY) {
            setShowHeader(true);
          } else {
            setShowHeader(false);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 800);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={`Header ${animate ? 'fade-in' : ''} ${showHeader ? 'visible' : 'hidden'}`}>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <Link to="/"><img src={logo} alt="Logo" /></Link>
        <div className="hiddenLinks">
          <Link to="/">Anasayfa</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
          <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
          <Link to="/iletisim">İletişim</Link>
        </div>
      </div>

      <div className='rightSide'>
        <Link to="/">Anasayfa</Link>
        <Link to="/hakkimizda">Hakkımızda</Link>
        <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
        <Link to="/iletisim">İletişim</Link>
        <Button onClick={toggleHeader}>
          <ReorderIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
