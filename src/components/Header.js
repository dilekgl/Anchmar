import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Button from '@mui/material/Button';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Header.css";

const Header = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  const toggleHeader = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 800);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={`Header ${animate ? 'fade-in' : ''}`}>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
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
