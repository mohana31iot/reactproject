import React from 'react'
import { useEffect, useRef, useState } from "react"

const Useref = () => {
    const[value,setValue]=useState(0)
    const count = useRef(0);
    console.log(count);
    const inputElement = useRef();
    const btnClick = () => {
        console.log(inputElement.current);
        inputElement.current.style.background = 'yellow';
    }
    useEffect(()=>{
        count.current = count.current +1;
    },[value])
  return (
    <>
    <button onClick={() =>{setValue(prev => prev -1)}} >-</button>
    <button>{value}</button>
    <button onClick={() =>{setValue(prev => prev +1)}} >+</button>
    <h2>Render Count {count.current}</h2>
    <br></br>
    <h2>This is UseRef Hook</h2>
    <input type="text" ref={inputElement} />
    <button onClick={btnClick}>Click Here!</button>
    </>
  )
}

export default Useref
