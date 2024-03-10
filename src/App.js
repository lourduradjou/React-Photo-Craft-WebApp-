import React from 'react'
import { useState } from 'react'
import './App.css'
import Slider from './Slider'
import SideBarItem from './SideBarItem'



const DEFAULT_OPTION = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 50,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 50,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 50,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'GrayScale',
    property: 'grayscale',
    value: 50,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

export default function App() {
  const [selectOption, setSelectOption] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTION)
  const selectedObject = options[selectOption]

  function handleSliderChange( { target } ) {
      setOptions(prevOptions => {
        return prevOptions.map((option, index) => {
          if (index !== selectOption) return option
          return { ...option, value: target.value }
        })
      })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    console.log(filters)
    return { filter: filters.join(' ')}
  }

  return (
    <div className='container'>
      <div className='main-image' style={getImageStyle()}> </div>
      <div className="sidebar">
        {options.map((option, index) => {
          return ( 
            <SideBarItem 
              key = {index}
              name = {option.name}
              active = {index === selectOption}
              handleClick={() => {
                setSelectOption(index)
              }}
            />
          )
        })}
      </div>
      <Slider
        min = {selectedObject.range.min}
        max = {selectedObject.range.max}
        value = {selectedObject.value}
        onChangeValues = {handleSliderChange}
       />
    </div>
  )
}
