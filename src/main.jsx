
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ShopProductContextProvider } from './context/ProductContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';


createRoot(document.getElementById('root')).render(

<ShopProductContextProvider>
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
</ShopProductContextProvider>

)
