import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function ProtectedRoute({ children, allowedUserTypes }) {
  const { user, userType } = useAuthStore();

  if (!user || !allowedUserTypes.includes(userType)) {
    return <Navigate to="/" replace />;
  }

  return children;
}