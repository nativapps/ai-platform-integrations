import React from 'react';
import '../App.css';

const AVATAR_URL = 'https://wedazpyhxkeengebyggo.supabase.co/storage/v1/object/public/asssets/frankie%20avatar%20-%20zf.png';
const BOT_URL = 'https://wedazpyhxkeengebyggo.supabase.co/storage/v1/object/public/asssets/frankie%20bot%20-%20zf.png';

const WelcomeBubble = ({ onClick, isMinimized, onMinimize, onExpand }) => {
  if (isMinimized) {
    return (
      <div className="bubble-minimized" onClick={onExpand} title="Expandir Frankie">
        <span className="bubble-minimized-arrow">▶</span>
        <img src={AVATAR_URL} alt="Frankie" className="bubble-minimized-avatar" />
      </div>
    );
  }

  return (
    <div className="bubble-expanded-wrapper">
      <button
        className="bubble-collapse-btn"
        onClick={(e) => { e.stopPropagation(); onMinimize(); }}
        title="Minimizar"
        aria-label="Minimizar"
      >
        ▶
      </button>
      <img
        src={BOT_URL}
        alt="Frankie"
        className="welcome-bubble-container"
        onClick={onClick}
      />
    </div>
  );
};

export default WelcomeBubble;
