import React from 'react'

export default function Slider( {min, max, value, onChangeValues} ) {
  return (
    <div className='slider-container'>
     <div>Slider</div>
      <input 
        type="range" 
        className='slider' 
        min = {min}
        max = {max}
        value = {value}
        onChange = {onChangeValues}
        />
    </div>
  )
}
