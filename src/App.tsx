import { useState } from 'react'
import './App.css'

function App() {

  const [valor, setvalor] = useState("")

  return (
    <>
      <label htmlFor="aqui">digite um numero: </label>
      <input type="number" className='esse' onChange={(e) => setvalor(e.target.value)} />
      <p >{parseInt(valor, 2)}</p>
    </>
  )
}

export default App
