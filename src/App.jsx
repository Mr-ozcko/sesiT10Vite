
import './App.css'
import Card from './components/card'
import img01 from "./assets/imgs/img01.jfif"
import img02 from "./assets/imgs/img02.jfif"
import img03 from "./assets/imgs/img03.jfif"


function App() {
    return (
    <>
      <Card 
        title ="Batatinha"
        img={img01}
        teste1="descricao da imagem"
        teste2="curitiba pr"
      />
      <Card 
        title ="paisagem 2"
        img={img02}
        teste1="descricao da imagem 02"
        teste2="colombo pr"
      />
      <Card 
        title ="paisagem 3"
        img={img03}
        teste1="descricao da imagem 03"
        teste2="guaratuba pr"
      />
    </>
  )
}

export default App
