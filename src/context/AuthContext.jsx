import { createContext ,useState,useEffect } from "react";


 export const  AuthContext =createContext();

export const   AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (loginStatus === "true") {
      setIsLoggedIn(true);
        setUser(currentUser);
    }
  }, []);

    const login = (userData) => {
    localStorage.setItem("isLoggedIn", "true");
     localStorage.setItem("currentUser", JSON.stringify(userData));

  setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");

  setUser(null);
    setIsLoggedIn(false);
  };

    const [user, setUser] = useState([]);

return(
    <AuthContext.Provider value ={{user ,setUser,  isLoggedIn, login, logout}}>
        {children}
     </AuthContext.Provider>
);
};
