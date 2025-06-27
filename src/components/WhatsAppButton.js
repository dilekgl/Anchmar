import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/905376497813"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
