
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ShopProductContextProvider } from './context/ProductContext.jsx';
import Login from "./pages/Login.jsx"
import Register from './pages/Register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(



<ShopProductContextProvider>
  <AuthProvider>
  <BrowserRouter>
    <App />
    {/* <Login/> */}
    {/* <Register/> */}
  </BrowserRouter>
  </AuthProvider>
</ShopProductContextProvider>

)
