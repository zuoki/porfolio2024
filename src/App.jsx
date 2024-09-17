import { useState } from 'react'
import Me from './Me/Me'
import { Table } from './table/table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div >
      <Me />
      <Table/>
      <div className='bg-fondo w-full h-2'></div>
    </div>

  )
}


export default App
