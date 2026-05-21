import React from 'react';
import '../App.css';

const WelcomeBubble = ({ onClick }) => {
  return (
    <div className="welcome-bubble-container" onClick={onClick}>
      <div className="avatar-wrapper">
        <img src="https://zcbdgpiohdtlvmvcpemu.supabase.co/storage/v1/object/public/static/assets/images/Chatbot-Efranco.png" alt="Frankie Avatar" className="frankie-avatar" />
      </div>
      <div className="bubble-content">
        <h3 className="bubble-title">¡Hola! Soy Frankie</h3>
        <p className="bubble-subtitle">Su asistente Virtual 24/7</p>
      </div>
    </div>
  );
};

export default WelcomeBubble;
