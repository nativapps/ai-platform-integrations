import React, { useState } from 'react';

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
      <div
        id="embed-container"
        style={{
          position: 'fixed',
          bottom: '76px',
          right: '20px',
          maxWidth: '400px',
          width: '100%',
          maxHeight: '620px',
          overflow: 'hidden',
          aspectRatio: '8 / 11',
          border: 'none',
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0 7px 15px rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column'
        }}
      >
        <iframe
          id="embed-floating-iframe"
          src={chatUrl}
          allow="microphone"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Chat clona"
        />
        <div
          id="embed-copyright"
          style={{
            textAlign: 'center',
            padding: '5px 15px',
            fontFamily: 'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
            fontSize: '14px'
          }}
        >
        </div>
      </div>
      <button
        id="embed-toggle-button"
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundImage: isOpen
            ? 'url("https://zcbdgpiohdtlvmvcpemu.supabase.co/storage/v1/object/public/static/assets/images/icon-clona-avatar-opened.png")'
            : 'url("https://zcbdgpiohdtlvmvcpemu.supabase.co/storage/v1/object/public/static/assets/images/icon-clona-avatar-closed.png")',
          backgroundColor: '#0a4010ff',
          backgroundSize: isOpen ? '45%' : '65%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          border: 'none',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          zIndex: 1001,
          padding: 0,
          transition: 'all 0.3s'
        }}
      />
    </>
  );
};

export default FloatingChat;
