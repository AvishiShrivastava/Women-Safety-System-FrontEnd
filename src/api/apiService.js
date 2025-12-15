import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000';
const api = axios.create({ baseURL: API_BASE + '/api' });
api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token');
  if(token) cfg.headers.Authorization = token.startsWith('Bearer') ? token : `Bearer ${token}`;
  return cfg;
});
export default api;

// ---------------- src/hooks/useAuth.js ----------------
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }){
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function useAuth(){
  return useContext(AuthContext);
}

function useProvideAuth(){
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')); } catch(e){ return null; }
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    if(user) localStorage.setItem('user', JSON.stringify(user)); else localStorage.removeItem('user');
  }, [user]);
  useEffect(() => {
    if(token) localStorage.setItem('token', token); else localStorage.removeItem('token');
  }, [token]);

  const login = ({ username, role }) => {
    // DEV: fake token + user. Replace with real API call later.
    const fakeToken = `Bearer fake-jwt-for-${username}`;
    const u = { id: Date.now(), username, role };
    setUser(u); setToken(fakeToken);
    return Promise.resolve({ user: u, token: fakeToken });
  };

  const logout = () => { setUser(null); setToken(null); };

  const hasRole = (r) => user?.role === r;
  const isAuthenticated = !!token && !!user;

  return { user, token, login, logout, hasRole, isAuthenticated, setUser, setToken };
}
