import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue , setMultipliedValue] = useState(1);
  let multipliedValue = value * 5;

  const multipliedbyfive = ()=>{
    // setMultipliedValue(value*5)
    setValue(value+1);
  }

  return (
    <>
    <h1>Main value : {value} </h1>
    <button
    onClick={multipliedbyfive}>Click to multiply value By 5</button>
    <h3>Multiplied value :{multipliedValue}</h3>
    </>
  )
}

export default App
