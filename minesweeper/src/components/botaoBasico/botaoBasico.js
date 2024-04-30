import "./botaoBasico.css"


function BotaoBasico({handlemodoJogo})
{
    return <button onClick={handlemodoJogo} type="button" className="botao">BÁSICO</button>
}

export default BotaoBasico