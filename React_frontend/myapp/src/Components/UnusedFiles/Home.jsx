import React from 'react'
import { useState } from 'react';


// Hooks should be inside component, and before return...
export const Home = () => {

    const [inputValue,setinputValue] = useState(0)

    const btnStyle = {
        padding:13,
        border: "none",
        backgroundColor:"green",
        margin:10,
    }
    const increment = () =>{
        setinputValue(inputValue+1)
    }
    const decrement = () =>{
        setinputValue(inputValue-1)
    }

  return (
    <>
    <div>From Home.jsx</div>
    <input style = {{
        padding: 5, border:"1px solid",
    }} type='number' 
    placeholder='Enter something...'
    value={inputValue}
    readOnly>
    </input><br></br>
    <button style={btnStyle} onClick={increment}>+</button>
    
    <button style={btnStyle} onClick={decrement}>-</button>
    </>
  )
}
