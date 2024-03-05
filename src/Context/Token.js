import { createContext, useState } from "react";
// // import { CounterContextProvider, counterContext } from "./Counter";
// // import TokenContext from './Counter';

export let TokenContext = createContext()

export default function TokenContextProvider(props) {

    const [token,setToken] = useState(null);

    return <TokenContext.Provider value={{token,setToken}}>
         {props.children}
    </TokenContext.Provider>
}

