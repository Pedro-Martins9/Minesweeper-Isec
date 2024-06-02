import React from 'react';
import './popup.css';

function GameOverPopup({ gamneOver }) {
  if (!gameOver) {
    return null;
  }

  return (
    <div className="game-over-popup">
      <h2>Game Over!</h2>
      <p>Tenta outra vez?</p>
    </div>
  );
}

export default GameOverPopup;