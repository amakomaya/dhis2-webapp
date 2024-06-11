import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    // Show a loading indicator or placeholder while checking auth status
    return <div>Loading...</div>;
  }

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
