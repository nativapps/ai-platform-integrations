import React from 'react';
import '../App.css';

const WelcomeBubble = ({ onClick }) => {
  return (
    <div className="welcome-bubble-container" onClick={onClick}>
      <div className="avatar-wrapper">
        <img src="https://wedazpyhxkeengebyggo.supabase.co/storage/v1/object/public/asssets/frankie%20avatar%20-%20zf.png" alt="Frankie Avatar" className="frankie-avatar" />
      </div>
      <div className="bubble-content">
        <h3 className="bubble-title">Hola, soy Frankie</h3>
        <p className="bubble-subtitle">¿En qué te puedo ayudar?</p>
      </div>
    </div>
  );
};

export default WelcomeBubble;
