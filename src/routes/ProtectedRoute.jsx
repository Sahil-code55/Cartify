import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

    console.log("ProtectedRoute:", isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;