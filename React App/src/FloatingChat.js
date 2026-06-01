import React, { useState } from 'react';
import WelcomeBubble from './components/WelcomeBubble';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatUrl = "https://staging-app.clona.co/chat/f6a7fb85-f6b9-44c5-b026-2005e39d2287";
  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  return (
    <>
      <div
        id="embed-overlay"
        onClick={closeChat}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          zIndex: 999,
          display: isOpen ? 'block' : 'none'
        }}
      />
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '76px',
            right: '20px',
            maxWidth: '400px',
            width: '100%',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px'
          }}
        >
          <button
            onClick={closeChat}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(30,30,30,0.75)',
              color: 'white',
              fontSize: '17px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
              transition: 'background 0.2s, transform 0.15s',
              flexShrink: 0
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.9)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(30,30,30,0.75)'; e.currentTarget.style.transform = 'scale(1)'; }}
            title="Cerrar chat"
            aria-label="Cerrar chat"
          >
            ✕
          </button>
          <div
            id="embed-container"
            style={{
              width: '100%',
              maxHeight: '620px',
              overflow: 'hidden',
              aspectRatio: '8 / 11',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 7px 15px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <iframe
              id="embed-floating-iframe"
              src={chatUrl}
              allow="microphone"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Chat clona"
            />
          </div>
        </div>
      )}
      {!isOpen && <WelcomeBubble onClick={toggleChat} />}
    </>
  );
};



export default FloatingChat;
