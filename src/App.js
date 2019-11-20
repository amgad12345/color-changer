import React, { component, useState } from 'react'

import Slider from './components/Slider'
import { changeExt } from 'upath'

const App = () => {
  const getRandom = () => {
    return Math.floor(Math.random() * 100)
  }

  let [hsl, setHSL] = useState(getRandom())
  let [saturation, setSATURATION] = useState(getRandom())
  let [light, setLIGHT] = useState(getRandom())

  const changeSetHSL = event => {
    setHSL(event.target.value)
  }

  const changeSaturation = event => {
    setSATURATION(event.target.value)
  }

  const changeLight = event => {
    setLIGHT(event.target.value)
  }

  const setRandom = () => {
    setHSL(getRandom())
    setSATURATION(getRandom())
    setLIGHT(getRandom())
  }

  return (
    <div className="whole"  style={{ backgroundColor: `hsl(${hsl},${saturation}%,${light}%)` }}>
      <h1>Colors</h1>
      <Slider value={hsl} change={changeSetHSL} />
      <Slider value={saturation} change={changeSaturation} />
      <Slider value={light} change={changeLight} />
      <br />
      <button onClick={setRandom}>RANDOM</button>
    </div>
  )
}

export default App
