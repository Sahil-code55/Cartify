import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from "./layouts/MinLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
//pages

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => {
  return (

   <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default App
