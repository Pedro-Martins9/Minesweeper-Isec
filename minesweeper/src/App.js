import React from 'react';
import "./App.css"
import Logo from "./components/logo/logo"
import BotaoBasico from './components/botaoBasico/botaoBasico';


function App(){

return (
    <>
    <div className='background'>
        <div className='logo-container'><Logo/></div>
        <div className='botaoBasico-container'><BotaoBasico/></div>
    </div>
    </>
)
}

export default App