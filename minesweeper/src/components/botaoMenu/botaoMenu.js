import "./botaoMenu.css"


function BotaoMenu({resetModoJogo}) {

    return <button onClick={resetModoJogo} type="button" className="botao menu">MENU</button>;
}


export default BotaoMenu