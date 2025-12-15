import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function RoleRoute({ allowedRoles = [], children }){
  const { isAuthenticated, user } = useAuth();
  if(!isAuthenticated) return <Navigate to="/login" replace />;
  if(!allowedRoles.includes(user?.role)) return <Navigate to="/not-authorized" replace />;
  return children;
}