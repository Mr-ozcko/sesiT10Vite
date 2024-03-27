import style from "./calc.module.css"
import Menu from "./components/menu"

export const Calc = () =>{
    return(
        <>
        <Menu/>
        <div className={style.sectionCalc}>
            <h1>Calculos</h1>
        </div>
        </>
    )
}