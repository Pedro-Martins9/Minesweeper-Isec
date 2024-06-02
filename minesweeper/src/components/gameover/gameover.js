import './gameover.css';

function GameOver({activo, reset}) {
  if (activo) {
    return null;
  }

    if (activo === null) return (
    <div className="game-over-popup">
      <h2 className='titulo2'>Game Over!</h2>
      <button className='botao' onClick={reset}>Tentar outra vez?</button>
    </div>
  );
}

export default GameOver;