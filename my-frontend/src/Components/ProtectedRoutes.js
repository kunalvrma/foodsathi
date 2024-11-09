// src/components/ProtectedRoute.js
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { auth } = useAuth();

  // Check if the user is authenticated
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if the user role is available and matches the allowed role
  if (allowedRole && auth.user && auth.user.role !== allowedRole) {
    return <Navigate to="/" />;
  }

  // If authenticated and the role matches, render the children
  return children;
};

export default ProtectedRoute;