import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <CartDrawer />
    </>
  );
};

export default MainLayout;