
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ShopProductContextProvider } from './context/ProductContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';



createRoot(document.getElementById('root')).render(

<ShopProductContextProvider>
  <AuthProvider>
    <CartProvider>
          <ToastProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
       </ToastProvider>
    </CartProvider>
  </AuthProvider>
</ShopProductContextProvider>

)
