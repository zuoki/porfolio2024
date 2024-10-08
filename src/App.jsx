import './App.css'
import Header from './Header/Header'
import Table from "./Table/Cosito"
import About from './About/About'
import NavBar from './NavBar/NavBar'
import Exp from './Exp/Exp'
import Proyectos from './Proyectos/Proyectos'
import ZuokiDev from './ZuokiDev/ZuokiDev'
import ExpPc from './Pc/ExpPc/ExpPc'
import AboutPc from './Pc/AboutPc/AboutPc'
import TecnologiasPc from './Pc/TecnologiasPc/TecnologiasPc'
import ProyectosPC from './Pc/ProyectosPc/ProyectosPc'
import ZuokiDevPC from './Pc/ZuokiDevPc/ZuokiDevPC'



function App() {

  const whith = window.innerWidth;
  console.log(whith)





  if (whith < 1280) return (
    <div id='fondoD' className='bg-gradient-to-bl from-orange-600  to-violet-700 font-semibold '>

      <NavBar />

      <Header />
      <Table />
      <div className='bg-gray-950 bg-opacity-85 h-4'></div>
      <About />
      <Exp />
      <Proyectos />
      <ZuokiDev id="zuoki" />


      <br />
      <br />
      <br />

    </div>

  )
  else
    return (
      <section className='bg-gradient-to-bl from-orange-600  to-violet-700 font-semibold '>

        <NavBar />
        <Header />
        <Table />
      <div className='bg-gray-950 bg-opacity-85 h-4'></div>
      <AboutPc/>
        <ExpPc />
        <TecnologiasPc />
        <ProyectosPC />
        <ZuokiDevPC id="zuoki" />
       
      
     
      </section>)
}


export default App
