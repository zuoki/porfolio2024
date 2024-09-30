import './App.css'
import Header from './Header/Header'
import  Table  from "./Table/Cosito"
import About from './About/About'
import NavBar from './NavBar/NavBar'
import Exp from './Exp/Exp'
import Proyectos from './Proyectos/Proyectos'
import ZuokiDev from './ZuokiDev/ZuokiDev'


function App() {
  


  return (
    <div className='bg-gradient-to-bl from-orange-600  to-violet-700 font-semibold rounded-2xl'>
      
      <NavBar />
      
      <Header/>
      <Table/>
      <div className='bg-gray-950 bg-opacity-85 h-4'></div>
      
      <About/>
      <Exp />
      <Proyectos/>
      <ZuokiDev id="zuoki" className="columns-2"/>

      
    <br />
    <br />
    <br />

    </div>

  )
}


export default App
