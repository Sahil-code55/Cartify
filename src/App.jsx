// import { useState } from 'react';
// import { CartProvider } from './context/CartContext';

// Pages
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import About from './pages/About';
// import Contact from './pages/Contact';

// function MainAppContent() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home setCurrentPage={setCurrentPage} />;
//       case 'shop':
//         return <Shop />;
//       case 'product-details':
//         return <ProductDetails />;
//       case 'cart':
//         return <Cart />;
//       case 'login':
//         return <Login setCurrentPage={setCurrentPage} />;
//       case 'register':
//         return <Register setCurrentPage={setCurrentPage} />;
//       case 'profile':
//         return <Profile />;
//       case 'about':
//         return <About />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <Home setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="app-container">
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <main className="main-content">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <CartProvider>
//       <MainAppContent />
//     </CartProvider>
//   );
// }

import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//pages

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app-container ">
    <>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </> 
  <Footer/>
    </div>
  )
}

export default App
