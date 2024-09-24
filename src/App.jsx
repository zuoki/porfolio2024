import './App.css'
import Me from './Me/Me'
import  Table  from "./Table/Cosito"
import About from './About/About'
import NavBar from './NavBar/NavBar'
import Exp from './Exp/Exp'


function App() {
  


  return (
    <div className='bg-gradient-to-tr from-red-600 to-orange-400'>
      <NavBar/>
      <Me />
      <Table/>
      <div className='bg-gray-950 bg-opacity-75 h-3'></div>
      <About/>
      <Exp/>
     

    </div>

  )
}


export default App
