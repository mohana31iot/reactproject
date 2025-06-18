import {React, useState, useEffect} from 'react'



const useLocalStorage = (key, initialValue) => {
    console.log(key);
    const [name, Setname] = useState( localStorage.getItem(key)?
localStorage.getItem(key)
:initialValue);

useEffect(()=>{
    localStorage.setItem(key,name)
},[name,key])

  return (
    
    [name, Setname]
  )
}

export default useLocalStorage

