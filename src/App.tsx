import { useState } from 'react'
import './App.css'

function App() {
  
  let [coin,setCoin]=useState("Flip It")

  function flip(){
    let randomNumber =Math.random()
    console.log(randomNumber)
    if(randomNumber<=0.5){
      setCoin("Head")
    }else setCoin("Tails")
  }
  
  return (
    <div className="App">
      <h1>Head or Tails</h1>
      <p className='coin'>{coin}</p>

      <button className='flipButton' onClick={flip}>Flip</button>

    </div>
  )
}

export default App
