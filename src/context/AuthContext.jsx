import { createContext ,useState,useEffect } from "react";


 export const  AuthContext =createContext();

export const   AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

    const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

    const [user, setUser] = useState([]);

return(
    <AuthContext.Provider value ={{user ,setUser,  isLoggedIn, login, logout}}>
        {children}
     </AuthContext.Provider>
);
};
