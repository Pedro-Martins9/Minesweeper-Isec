import './gamewin.css';

function GameWin({gameW, reset}) {
  if (!gameW) {
    return null;
  }

    if (gameW) return (
    <div className="game-over-popup">
      <h2 className='titulo2'>Ganhaste!</h2>
      <button className='botao' onClick={reset}>Jogar outra vez?</button>
    </div>
  );
}

export default GameWin;