import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  var arr = ["android" , "blackbary" , "iphone" , "Windows phone"]

  var object = [
    {name:"Samsung" , style:"Square"},
    {name:"HTC" , style:"Square"},
    {name:"Mircomax" , style:"circle"},
    {name:"Apple" , style:"disc"}
  ]
  return (
    <div className="App">
      <div><h3>Mobile Operating System</h3></div>

        {arr.map((el)=>(
       <li className='circle'>{el}</li>
        ))}

<div><h3>Mobile Manufacturer</h3></div>
      
      {object.map((el)=>(
     <li className={el.style}>{el.name}</li>
      ))}

    </div>
  )
}

export default App
