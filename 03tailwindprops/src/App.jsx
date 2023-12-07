import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  let myobj ={
    name: "Abhi",
    age: 21
  }
  let arr = [2,3,4,5]
  return (
    <>
      <h1 className="bg-green-400 text-red" p-4 rounded-xl>Tailwind CSS</h1>
      <Card username="Code with Me" btnText="click me"/>
      <Card username="Choffe aur code" />
    </>
  )
}

export default App
