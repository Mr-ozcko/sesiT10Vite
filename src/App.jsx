import { Tilt } from 'react-tilt'
import style from './App.module.css'
import Menu from './components/menu'
import Card from './components/card'
import img01 from "./assets/imgs/img01.jfif"
import img02 from "./assets/imgs/img02.jfif"
import img03 from "./assets/imgs/img03.jfif"


function App() {
  const batata = {
    reverse:        false,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
    return (
      <>
    <Menu/>
    <div className={style.section01}>
      <Tilt options={batata} style={{ height: 250, width: 250 }}>
        <Card 
        title ="Batatinha"
        img={img01}
        teste1="descricao da imagem"
        teste2="curitiba pr"
        />
      </Tilt>

      <Tilt options={batata} style={{ height: 250, width: 250 }}>
        <Card 
        title ="paisagem 2"
        img={img02}
        teste1="descricao da imagem 02"
        teste2="colombo pr"
        />
      </Tilt>

      <Tilt options={batata} style={{ height: 250, width: 250 }}>
        <Card 
        title ="paisagem 3"
        img={img03}
        teste1="descricao da imagem 03"
        teste2="guaratuba pr"
        />
      </Tilt>

      <Tilt options={batata} style={{ height: 250, width: 250 }}>
        <Card 
        title ="Batatinha"
        img={img01}
        teste1="descricao da imagem"
        teste2="curitiba pr"
        />
      </Tilt>

      <Tilt options={batata} style={{ height: 250, width: 250 }}>
        <Card 
        title ="paisagem 2"
        img={img02}
        teste1="descricao da imagem 02"
        teste2="colombo pr"
        />
      </Tilt>

      <Tilt options={batata} style={{ height: 250, width: 250 }}>
        <Card 
        title ="paisagem 3"
        img={img03}
        teste1="descricao da imagem 03"
        teste2="guaratuba pr"
        />
      </Tilt>
    </div>
     
    

    </>
  )
}

export default App
