import React from 'react';
import '../App.css';

const WelcomeBubble = ({ onClick }) => (
  <img
    src="https://wedazpyhxkeengebyggo.supabase.co/storage/v1/object/public/asssets/frankie%20bot%20-%20zf.png"
    alt="Frankie"
    className="welcome-bubble-container"
    onClick={onClick}
  />
);

export default WelcomeBubble;
