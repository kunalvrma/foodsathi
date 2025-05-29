import React, { createContext, useState, useContext } from 'react';

// Create the User Context with a default value to avoid null errors
const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
  // State to store user information
  const [user, setUser] = useState({
    username: 'User Name', // Default username
    profile: './media/41B3Q0XgFVL._AC_UF1000,1000_QL80_.jpg', // Default profile image path
    about: '',
    tags: [], // Default tags
    email: '',
    phone: '',
    website: '',
  });

  // Function to update user information
  const updateUser = (updates) => {
    setUser(prevUser => ({ ...prevUser, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the User Context safely
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
