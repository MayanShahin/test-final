import { createContext, useState } from "react";


let userContext = createContext();

function userContextProvider(props) {

    const [userToken, setUserToken] = useState(null)
    return <userContext.Provider value={userToken}>
        {props.children}
    </userContext.Provider>
}