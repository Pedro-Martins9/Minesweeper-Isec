import React from 'react';
import "./App.css"
import Logo from "./components/logo/logo"
import BotaoBasico from './components/botaoBasico/botaoBasico';
import BotaoIntermedio from './components/botaoIntermedio/botaoIntermedio';
import BotaoAvancado from './components/botaoAvancado/botaoAvancado';


function App(){

return (
    <>
    <div className='background'>
        <div className='logo-container'><Logo/></div>
        <div className='botao-master'>
        <div className='botao-container'><BotaoBasico/></div>
        <div className='botao-container'><BotaoIntermedio/></div>
        <div className='botao-container'><BotaoAvancado/></div>
        </div>
    </div>
    </>
)
}

export default App