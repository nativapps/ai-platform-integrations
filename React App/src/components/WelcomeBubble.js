import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const AVATAR_URL = 'https://wedazpyhxkeengebyggo.supabase.co/storage/v1/object/public/asssets/frankie%20avatar%20-%20zf.png';
const BOT_URL = 'https://wedazpyhxkeengebyggo.supabase.co/storage/v1/object/public/asssets/frankie%20bot%20-%20zf.png';

const DRAG_THRESHOLD = 5;
const MOVE_ICON_URL = 'https://zcbdgpiohdtlvmvcpemu.supabase.co/storage/v1/object/public/static/assets/images/images.png';

const MoveArrowsIcon = () => (
  <img src={MOVE_ICON_URL} alt="Mover" className="move-arrows-icon" draggable={false} />
);

const WelcomeBubble = ({ onClick, isMinimized, onMinimize, onExpand }) => {
  const [pos, setPos] = useState(() => {
    const saved = localStorage.getItem('frankie-pos');
    return saved ? JSON.parse(saved) : null;
  });
  const drag = useRef({ active: false, moved: false, startX: 0, startY: 0, elemLeft: 0, elemTop: 0 });
  const wrapperRef = useRef(null);
  const justDragged = useRef(false);

  useEffect(() => {
    if (pos) {
      localStorage.setItem('frankie-pos', JSON.stringify(pos));
    }
  }, [pos]);

  useEffect(() => {
    const elem = wrapperRef.current;
    if (!elem) return;

    const handlePointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      const rect = elem.getBoundingClientRect();
      drag.current = { active: true, moved: false, startX: e.clientX, startY: e.clientY, elemLeft: rect.left, elemTop: rect.top };
      elem.setPointerCapture(e.pointerId);

      const onMove = (ev) => {
        if (!drag.current.active) return;
        const dx = ev.clientX - drag.current.startX;
        const dy = ev.clientY - drag.current.startY;
        if (!drag.current.moved && Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
        drag.current.moved = true;
        setPos({
          left: Math.max(0, Math.min(window.innerWidth - rect.width, drag.current.elemLeft + dx)),
          top: Math.max(0, Math.min(window.innerHeight - rect.height, drag.current.elemTop + dy)),
        });
      };

      const onUp = (ev) => {
        drag.current.active = false;
        if (drag.current.moved) {
          justDragged.current = true;
          setTimeout(() => { justDragged.current = false; }, 0);
        }
        elem.releasePointerCapture(ev.pointerId);
        elem.removeEventListener('pointermove', onMove);
        elem.removeEventListener('pointerup', onUp);
        elem.removeEventListener('pointercancel', onUp);
      };

      elem.addEventListener('pointermove', onMove);
      elem.addEventListener('pointerup', onUp);
      elem.addEventListener('pointercancel', onUp);
    };

    elem.addEventListener('pointerdown', handlePointerDown, { passive: false });
    return () => elem.removeEventListener('pointerdown', handlePointerDown);
  }, [isMinimized]);

  const posStyle = pos ? { left: pos.left, top: pos.top, bottom: 'auto', right: 'auto' } : {};

  if (isMinimized) {
    return (
      <div
        ref={wrapperRef}
        className="bubble-minimized"
        style={posStyle}
        onClick={() => { if (!justDragged.current) onExpand(); }}
        title="Expandir Frankie"
      >
        <span className="hand-move-indicator" title="Mover">
          <MoveArrowsIcon />
        </span>
        <span className="bubble-minimized-arrow">▶</span>
        <img src={AVATAR_URL} alt="Frankie" className="bubble-minimized-avatar" draggable={false} />
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="bubble-expanded-wrapper" style={posStyle}>
      <span className="hand-move-indicator-expanded" title="Mover">
        <MoveArrowsIcon />
      </span>
      <button
        className="bubble-collapse-btn"
        onClick={(e) => { if (justDragged.current) return; e.stopPropagation(); onMinimize(); }}
        title="Minimizar"
        aria-label="Minimizar"
      >
        ▶
      </button>
      <img
        src={BOT_URL}
        alt="Frankie"
        className="welcome-bubble-container"
        onClick={() => { if (!justDragged.current) onClick(); }}
        draggable={false}
      />
    </div>
  );
};

export default WelcomeBubble;
