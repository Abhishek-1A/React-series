import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   //const counter=15;
   const [counter, setCounter] = useState(15)
   const addvalue = () =>{
    console.log("Added", counter);
    // counter = counter+1;
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    
   }
    const removeval = ()=> {
      console.log("Removed", counter);
      setCounter(counter-1)
    }
  
  return (
    <>
    <h1>Chai aur react</h1>

    <h3>Counter value {counter}</h3>

    <button onClick={addvalue}>Add Value</button>
    <br />
    <button onClick={removeval}>remove value</button>
    </>
  )
}

export default App
