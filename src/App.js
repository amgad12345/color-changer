import React, { component, useState } from 'react'
import Slider from './components/Slider'

const App = () => {
 
  const [hsl, setHSL]= useState(Math.floor(Math.random() * 360))
  const [saturation, setSATURATION] = useState(Math.floor(Math.random() * 101))
  const [light, setLIGHT] = useState(Math.floor(Math.random() * 101))
  const [alpha, setAlphaLevel] = useState(Math.floor(Math.random() * 101))

  var randomnumber = Math.floor(Math.random() * (1 - 1000 + 1)) + 1000;
console.log(randomnumber)

  const changeSetHSL = (event) => {
    setHSL(event.target.value)
  }

  const changeSaturation = (event) => {
    setSATURATION(event.target.value)
  }

  const changeLight = (event) => {
    setLIGHT(event.target.value)
  }


  const changeAlpha = (event) => {
    setAlphaLevel(event.target.value)
  }



  const randomColor = () => {
    setHSL(() => Math.floor(Math.random() * 360 + 1))
    setSATURATION(() => Math.floor(Math.random() * 101))
    setLIGHT(() => Math.floor(Math.random() * 101))
    setAlphaLevel(() => Math.floor(Math.random() * 101))
    
  }


  const buttonRandomColor = () => {
    setHSL(() => Math.floor(Math.random() * 360 + 1))
    setSATURATION(() => Math.floor(Math.random() * 101))
    setLIGHT(() => Math.floor(Math.random() * 101))
    setAlphaLevel(() => Math.floor(Math.random() * 101))
    
  }
  return (
    <>
    <body>
    <header  >
      Because life's too short to live in black and white
    </header>
    <div className = "img-Container">
    <div
      className='whole'
      style={{ backgroundColor: `hsl(${hsl},${saturation}%,${light}%,${alpha}%)`}}
    >
      <Slider value={hsl} change={changeSetHSL} />
      <Slider value={saturation} change={changeSaturation} />
      <Slider value={light} change={changeLight} />
      <Slider value={alpha} change={changeAlpha} />
      <br />
      <div className = "button-Container">
      <button
       className="button"
       style={{ backgroundColor: `hsl(${hsl*randomnumber},${saturation*randomnumber}%,${light}%,${alpha*randomnumber}%)`}}
       onClick={randomColor}>
        RANDOM
     </button>
     </div>
     </div>
     <footer>
       Colors are vibrating light energies, each “color ray” produces a sound that affects matter.
    </footer>
    </div>
    </body>
    </>
  )
}


export default App
