// Add this at the top of your file
"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const whatsappNumber = "+923028167655"; // Replace this with your own number

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '70px', // Increased right margin for more left space
    backgroundColor: '#25D366', // WhatsApp green color
    borderRadius: '50%',
    padding: '20px',
    color: '#FFFFFF',
    fontSize: '24px',
    zIndex: '1000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const hoverStyle = {
    backgroundColor: '#128C7E', // Darker green for hover effect
  };

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp style={{ fontSize: '24px' }} />
    </a>
  );
};

export default Whatsapp;
