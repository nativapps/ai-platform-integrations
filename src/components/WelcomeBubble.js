import React from 'react';
import '../App.css';
import frankieAvatar from '../assets/Chatbot.png';

const WelcomeBubble = ({ onClick }) => {
  return (
    <div className="welcome-bubble-container" onClick={onClick}>
      <div className="avatar-wrapper">
        <img src={frankieAvatar} alt="Frankie Avatar" className="frankie-avatar" />
      </div>
      <div className="bubble-content">
        <h3 className="bubble-title">¡Hola! Soy Frankie</h3>
        <p className="bubble-subtitle">Tu asistente Virtual 24/7</p>
      </div>
    </div>
  );
};

export default WelcomeBubble;
