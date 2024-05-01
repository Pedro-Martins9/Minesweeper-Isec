import React, {useState} from 'react';
import "./App.css"
import { Logo, BotaoBasico, BotaoIntermedio, BotaoAvancado, JogoBAS, JogoAVA } from './components/index';


function App(){

    const[modoJogoBAS, setmodoJogoBAS] = useState(false);

    const handlemodoJogoBAS = () =>{
        setmodoJogoBAS(true);
    };

    const[modoJogoINT, setmodoJogoINT] = useState(false);

    const handlemodoJogoINT= () =>{
        setmodoJogoINT(true);
    };

    const[modoJogoAVA, setmodoJogoAVA] = useState(false);

    const handlemodoJogoAVA = () =>{
        setmodoJogoAVA(true);
    };

 
return (
    <>
    <div className='background'>
    {!modoJogoBAS && !modoJogoINT && !modoJogoAVA &&
        (<div className='homepage'>
        <div className='logo-container'><Logo/></div>
        {/* quando carregados, os botoes ativam o seu respetivo modo de jogo
         cada modo de jogo tem um tabela respetiva (em desenvolvimento)*/}
        <div className='botao-container'><BotaoBasico handlemodoJogoBAS={handlemodoJogoBAS}/></div> 
        <div className='botao-container'><BotaoIntermedio handlemodoJogoINT={handlemodoJogoINT}/></div>
        <div className='botao-container'><BotaoAvancado handlemodoJogoAVA={handlemodoJogoAVA}/></div>
        </div>)
    }
    {modoJogoBAS && (
        <div className='jogo-container'><JogoBAS/></div>
    )}
    {modoJogoINT && (
        <div className='jogo-container'><JogoINT/></div>
    )}
    {modoJogoAVA && (
        <div className='jogo-container'><JogoAVA/></div>
    )}
    </div>
    </>
)
}

export default App