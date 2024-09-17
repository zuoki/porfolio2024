import { useState } from 'react'
import Me from './Me/Me'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className=' '>
      <Me />
    </div>

  )
}


export default App
