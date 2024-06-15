import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "hitesh", 
    age: 21,
  }

  let newArr = [1,23,4,6]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind tets</h1>
    {/* <Card username = "chai aur code " someObj = {newArr}  /> */}
    <Card username = "chai aur code " btnText = "Click me"/>
    <Card username="stephanie" />
    </>
  )
}

export default App
