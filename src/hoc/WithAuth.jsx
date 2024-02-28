import React from "react";
import { useLocation, Navigate } from "react-router-dom";


const WithAuth = ({ children }) => {
  const location = useLocation();

  if (!window.localStorage.token) {
    return <Navigate to="/admin" state={{ from: location }} />;
  }

  return children;
};

export default WithAuth;
