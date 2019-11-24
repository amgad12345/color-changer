import React, { useState } from 'react'

const Slider = props => {
  return (
    <div>
      <section>
        <input
          type='range'
          min='1'
          max='100'
          value={props.value}
          onChange={props.change}
          className='myslider'
          id='sliderRange'
        />
      </section>
    </div>
  )
}
export default Slider
