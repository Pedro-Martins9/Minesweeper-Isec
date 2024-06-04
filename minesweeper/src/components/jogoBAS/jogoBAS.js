import React, { useState, useEffect } from 'react';
import "./jogoBAS.css"
import Timer from '../timer/timer';
import GameOver from '../gameover/gameover';
import Contador from '../contador/contador';
import GameWin from '../gamewin/gamewin';

function JogoBAS() {
  const LINS = 9;
  const COLS = 9;
  const MINAS = 10;

  const [cell, setCell] = useState([]);
  const [area, setArea] = useState([]);
  const [band, setBand] = useState([]);
  const [totalBand, setTotalBand] = useState(0); 
  const [gameW, setGameW] = useState(false);

  const [activo, setActivo] =useState(false);

  useEffect(() => {
    if (totalBand === MINAS) {
      let fimdejogo = true;
      for (let lin = 0; lin < LINS; lin++) {
        for (let col = 0; col < COLS; col++) {
          // procura para ver se as celulas escondidas tem bombas
          if (cell[lin][col] !== -1 && !area[lin][col]) {
            fimdejogo= false;
            break; // se nao sai do loop e o jogo continua
          }
        }
        if (!fimdejogo) {
          break; // saida do loop externo
        }
      }
  
      // se so bombas estiverem escondidas o jogo acaba
      if (fimdejogo) {
        setGameW(true);
      }
    }
  }, [gameW, totalBand, MINAS, cell, area]);
  

  useEffect(() => {
    const total = band.flat().filter(cell => cell === 1).length; //adiciona/retira elementos de um array cuja lenght é calculada, esta é o total de bandeiras
    setTotalBand(total);
  }, [band]);

  useEffect(() => {
    criaArea();
  }, []);

  function criaArea() {
    let cell = [];
    let area = [];
    let band = [];

    // Cria area de jogo com todos os elementos no seu estado inicial
    for (let i = 0; i < LINS; i++) {
      cell[i] = []; //cria um array sem nada em todos os elementos
      area[i] = [];
      band[i] = [];
      for (let j = 0; j < COLS; j++) {
        cell[i][j] = 0;
        area[i][j] = false; //estado inicial, celula escondida
        band[i][j] = 0;
      }
    }

    // Colocar minas usando math.random para que fiquem em locais diferentes em cada render
    let minas= 0;
    while (minas < MINAS) {
      let lin = Math.floor(Math.random() * LINS);
      let col = Math.floor(Math.random() * COLS);
      if (cell[lin][col] === 0) {
        cell[lin][col] = -1; // -1 significa que a celula tem mina
        minas++;
      }
    }

    //cria a area de jogo com as linhas e colunas indicas nas variaves iniciais LINS E COLS
    for (let lin = 0; lin < LINS; lin++) {
      for (let col = 0; col < COLS; col++) {
        if (cell[lin][col] === -1) continue;
        let numero = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (lin + i >= 0 && lin + i < LINS && col + j >= 0 && col + j < COLS) {
              if (cell[lin + i][col + j] === -1) numero++;
            }
          }
        }
        cell[lin][col] = numero;
      }
    }
    //atribui os valores finais a cada celula e o que vai acontecer quando usado o rightclick ou leftclick
    setCell(cell); 
    setArea(area); 
    setBand(band);
  }


  function reset(){
    criaArea();
    setActivo(false);
    setGameW(false);
  }

  function handleLeftClick(lin, col) {
    if (area[lin][col] || band[lin][col] !== 0) return; // o primeiro check verifica se a celula já está revelada, o segundo verifica se este tem uma bandeira
  
    // .map percorre todos os elementos do array area, e copia cada elemento e coloca-os numa variavel temporaria usada para modificar o estado da area de jogo inicial...
    let tempArea = area.map(lin => [...lin]); //... com o objetivo de nao alterar o array inicial e alterar apenas o seu estado
    mostraCell(tempArea, lin, col);
    setArea(tempArea); 
  }
  

  function mostraCell(area, lin, col) {
    if (lin < 0 || lin >= LINS || col < 0 || col >= COLS || area[lin][col]) return; //procura se area clickada esta dentro da Area de jogo
    area[lin][col] = true;
    setActivo(true);
    if (cell[lin][col] === -1){ //se bomba o jogo acaba (activo = null)
      setActivo(null);
    } else if (cell[lin][col] === 0) { //se a celula nao tiver mina ou mina adjacente revela tambem as celulas adjacentes com as mesmas condições
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          mostraCell(area, lin + i, col + j); 
        } 
      }
    }
  }
  

  function handleRightClick(event, lin, col) {
    event.preventDefault(); //prevem que apareça o ecrã normal quando usado o rightclick
    if (area[lin][col]) return;

    let tempBand = [...band]; //mesmo conceito que o handleLeftClick,
    tempBand[lin][col] = (tempBand[lin][col] + 1) % 3;
    setBand(tempBand);
  }

  return (
    <>
    <div className='reset-container'>
      <button onClick={reset} type="button" className="botao reset">RESET</button>
      </div>
    <div className='jogo-container'>
      <div className='jogo-bas'>
{cell.map((lin, linIndex) => (
  lin.map((cell, colIndex) => (
    <div
      key={`${linIndex}-${colIndex}`}
      onClick={() => handleLeftClick(linIndex, colIndex)}
      onContextMenu={(event) => handleRightClick(event, linIndex, colIndex)}
      className={`celula ${area[linIndex][colIndex] ? 'jogo-celula-in' : 'jogo-celula-out'}`}
    >
      {area[linIndex][colIndex] ? ( //ver se as celulas estao na area de jogo
        cell === -1 ? '💣' : cell === 0 ? '' : cell //se celula = -1 bomba se 0 nada
      ) : (
        band[linIndex][colIndex] === 1 ? '🚩' : band[linIndex][colIndex] === 2 ? '❓' : '' //se celula = 1 bandeira se =2 explosao (possibilidade de mina e certeza de mina)
      )}
    </div>
  ))
))}

      </div>
      <div className='botao timer'>
      <Timer activo={activo}/>
      <GameOver activo ={activo} reset={reset}/>
      <GameWin gameW = {gameW} reset={reset}/>
      <Contador total = {totalBand}/>
      </div>
    </div>
    </>
  );
}

export default JogoBAS;
