import React, { createContext, useState, useContext } from 'react';

// Create the User Context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'User Name', // Default username
    profile: './media/41B3Q0XgFVL._AC_UF1000,1000_QL80_.jpg',
    about: '',
    tags: [], // Default tags
    email: '',
    phone: '',
    website: '',  
  });
  const updateUser = (updates) => {
    setUser(prevUser => ({ ...prevUser, ...updates }));
  };
  return (
    <UserContext.Provider value={{ user, updateUser , setUser}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User Context
export const useUser = () => useContext(UserContext);

