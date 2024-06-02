import React, {useState} from 'react';
import "./App.css"
import { Logo, BotaoBasico, BotaoIntermedio, BotaoAvancado, JogoBAS, JogoINT, JogoAVA, BotaoMenu} from './components/index';


function App(){

    const[modoJogoBAS, setmodoJogoBAS] = useState(false);

    const handlemodoJogoBAS = () =>{
        setmodoJogoBAS(!modoJogoBAS);
    };

    const[modoJogoINT, setmodoJogoINT] = useState(false);

    const handlemodoJogoINT= () =>{
        setmodoJogoINT(!modoJogoINT);
    };

    const[modoJogoAVA, setmodoJogoAVA] = useState(false);

    const handlemodoJogoAVA = () =>{
        setmodoJogoAVA(!modoJogoAVA);
    };

    const resetModoJogo = () =>{
        setmodoJogoBAS(false);
        setmodoJogoINT(false);
        setmodoJogoAVA(false);
    }
 
return (
    <>
    <div className='background'>
    {!modoJogoBAS && !modoJogoINT && !modoJogoAVA &&
        (<div className='homepage'>
        <div className='logo-container'><Logo/></div>
        {/* quando carregados, os botoes ativam o seu respetivo modo de jogo
         cada modo de jogo tem um tabela respetiva*/}
        <div className='botao-container'><BotaoBasico handlemodoJogoBAS={handlemodoJogoBAS}/></div> 
        <div className='botao-container'><BotaoIntermedio handlemodoJogoINT={handlemodoJogoINT}/></div>
        <div className='botao-container'><BotaoAvancado handlemodoJogoAVA={handlemodoJogoAVA}/></div>
        </div>)
    }
    {modoJogoBAS && (
        <>
        <div className='menu-container'><BotaoMenu resetModoJogo={resetModoJogo}/></div>
        <div className='jogo-container'><JogoBAS/></div>
        </>
    )}
    {modoJogoINT && (
        <>
        <div className='menu-container'><BotaoMenu resetModoJogo={resetModoJogo}/></div>
        <div className='jogo-container'><JogoINT/></div>
        </>
    )}
    {modoJogoAVA && (
        <>
        <div className='menu-container'><BotaoMenu resetModoJogo={resetModoJogo}/></div>
        <div className='jogo-container'><JogoAVA/></div>
        </>
    )}
    </div>
    </>
)
}

export default App