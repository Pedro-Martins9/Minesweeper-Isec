import React, {useState} from 'react';
import "./App.css"
import { Logo, BotaoBasico, BotaoIntermedio, BotaoAvancado } from './components/index';


function App(){

    const[modoJogo, setmodoJogo] = useState(false);

    const handlemodoJogo = () =>{
        setmodoJogo(true);
    }


return (
    <>
    <div className='background'>
    {!modoJogo &&
        (<div className='homepage'>
        <div className='logo-container'><Logo/></div>
        <div className='botao-container'><BotaoBasico handlemodoJogo={handlemodoJogo}/></div>
        <div className='botao-container'><BotaoIntermedio handlemodoJogo={handlemodoJogo}/></div>
        <div className='botao-container'><BotaoAvancado handlemodoJogo={handlemodoJogo}/></div>
        </div>)
    }
    </div>
    </>
)
}

export default App