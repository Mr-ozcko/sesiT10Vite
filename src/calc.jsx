import style from "./calc.module.css"
import Menu from "./components/menu"
import { useState, useEffect } from "react"

export const Calc = () =>{
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    // useEffect(()=> {

    //     if(numero1 !== undefined && numero2 !== undefined){
    //         setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    //         setRespSub(parseFloat(numero1) - parseFloat(numero2))
    //         setRespMulti(parseFloat(numero1) * parseFloat(numero2))
    //         setRespDiv(parseFloat(numero1) / parseFloat(numero2)) 
    //     }

    // }, [numero1, numero2])

    const handleSoma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    const handleSub = (a,b) => setRespSub(parseFloat(a) - parseFloat(b))

    const msgErro = "Digite um numreo valido"

    return(
        <>
        <Menu/>
        <div className={style.sectionCalc}>
            <h1>Calculos</h1>
            <div>
                <label htmlFor="n1"> numero 1</label>
                <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="n2"> numero 2</label>
                <input type="text" id="n2" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div>
                <div>
                    <h1>Soma</h1>
                    {!isNaN(respSoma) ? respSoma : msgErro}
                    <button onClick={handleSoma}>Somar</button>
                </div>
                <div>
                    <h1>Sub</h1>
                    {!isNaN(respSub) ? respSub : msgErro}
                    <button onClick={() => handleSub(numero1, numero2)}> Subtrair</button>
                </div>
                <div>
                    <h1>Mult</h1>
                    {!isNaN(respMulti) ? respMulti : msgErro}
                </div>
                <div>
                    <h1>Div</h1>
                    {!isNaN(respSoma) ? respDiv : msgErro}
                </div>
            </div>
        </div>
        </>
    )
}