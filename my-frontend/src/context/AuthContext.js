// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Change to store user object instead of just role
  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });

  const login = (role) => {
    setAuth({ isAuthenticated: true, user: { role } }); // Storing the role inside a user object
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null }); // Reset the user to null on logout
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);