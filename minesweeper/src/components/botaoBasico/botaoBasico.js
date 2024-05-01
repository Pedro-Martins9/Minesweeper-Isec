import "./botaoBasico.css"


function BotaoBasico({handlemodoJogoBAS})
{
    return <button onClick={handlemodoJogoBAS} type="button" className="botao">BÁSICO</button>
}

export default BotaoBasico