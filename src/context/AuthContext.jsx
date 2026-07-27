import { createContext ,useState } from "react";






 export const  checkAuthContext =createContext();

export const   checkAuthContextProvider = ({children})=>{
    const [user, setUser] = useState([]);

return(
    <checkAuthContext.checkAuthContextProvider value ={{user ,setUser}}>
        {children}
    </checkAuthContext.checkAuthContextProvider>
)
}