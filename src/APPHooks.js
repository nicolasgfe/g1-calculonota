import { useState } from "react";

const AppHook = () => {
    const [score, setScore] = useState(null)
    const [subSelecao, setSubSelecao] = useState('G1')
    const [subFim, setSubFim] = useState('G2')
    const [resultado, setResultado] = useState('')
    const [resultadoFim, setResultadoFim] = useState('')



    const calculate = () => {
        if (subSelecao === 'G1') {
            setResultadoFim(21 - (score * score))
            setResultado("A nota na sub " +  subFim  + " deverá ser " +  resultadoFim )
        } else {
            setResultadoFim((21 - score) / 2)
            setResultado("A nota na sub " +  subFim  + " deverá ser " +  resultadoFim )
        }
    }

    const changeLabel = (event) => {
        if (event === 'G1') {
            setSubSelecao('G1')
            console.log(subSelecao);
            setSubFim('G2')
            console.log(subFim);
        } else {
            setSubSelecao('G2')
            console.log(subSelecao);
            setSubFim('G1')
            console.log(subFim);
        }
        setResultado('')
        console.log(resultado);
    }


    return (
        <div>
            <h1> Calculadora de Sub </h1>

            <input type='radio' name='subSelecao' value="G1" checked={subSelecao === 'G1'} onChange={event => changeLabel(event.target.value)} /> Sub G1
            <input type='radio' name='subSelecao' value="G2" checked={subSelecao === 'G2'} onChange={event => changeLabel(event.target.value)} /> Sub G2
            <br />
            <br />
            Nota {subFim}:
            <br />
            <input type='number' name='score' onChange={event => setScore(event.target.value)} />
            <br />
            <input type='button' name='calculate' value='Calculate' onClick={calculate} />
            <br />

            {resultado}
        </div>
    )
}

export default AppHook