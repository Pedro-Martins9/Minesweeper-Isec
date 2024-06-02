import { useState, useEffect } from 'react';
import "./timer.css"

function Timer({activo}) {
    const [temp, setTemp] = useState({ min: 0, seg: 0 });
    const [conta, setConta] = useState(false);

    useEffect(() => { //activo é importado dos modos de jogo e fica ativado quando uma celula é mostrada
        if (activo) {
            setConta(true);
        }
    }, [activo]);

    useEffect(() => {
        let interval = null;
        if (conta) {
            interval = setInterval(() => { //conta os segundos e converte 60 segundos para 1 minuto
                setTemp(temp => {
                    const upsegundos = temp.seg + 1;
                    if (upsegundos === 60) {
                        return { min: temp.min + 1, seg: 0 };
                    } else {
                        return { ...temp, seg: upsegundos };
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [conta]);

    return (
        <div className='botao'>
            <p>{temp.min < 10 ? '0' + temp.min : temp.min}:{temp.seg < 10 ? '0' + temp.seg : temp.seg}</p>
        </div>
    );
}

export default Timer;

