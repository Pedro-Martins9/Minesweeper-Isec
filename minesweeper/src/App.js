import React from 'react';
import "./App.css"
import { Logo, BotaoBasico, BotaoIntermedio, BotaoAvancado } from './components/index';


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