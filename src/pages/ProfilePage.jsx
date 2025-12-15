import React from 'react';
import useAuth from '../hooks/useAuth';

export default function ProfilePage(){
  const { user } = useAuth();
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user?.username}</p>
      <p>Role: {user?.role}</p>
      <button onClick={() => { localStorage.clear(); window.location.href = '/login'; }}>Sign out (clear)</button>
    </div>
  );
}
