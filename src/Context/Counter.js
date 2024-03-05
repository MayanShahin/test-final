import React, { createContext, useState } from "react";


export let CounterContext = createContext();

export default function CounterContextProvider(props) {
 
  const [counter, setCounter] = useState(0);


  function increase() {
    setCounter(Math.random)
  }

  return (
    <CounterContext.Provider value={{ counter,increase,setCounter}}>
      {props.children}
    </CounterContext.Provider>
  );
}

