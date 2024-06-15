import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;


  let [counter,setCounter] = useState(15)

  const addValue = ()=>{
    if(counter < 20){
      // counter++;
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
      setCounter((prevCounter) => prevCounter +1)
    }
    else{
      alert("value can not exceed 20")
    }
    // console.log("clicked", counter)
  }

  const removeValue = ()=>{
    if(counter > 0){
      // counter--;
    setCounter(counter-1)
    }  else{
      alert("value can not go below 0")
    }
    // console.log("clicked", counter)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
