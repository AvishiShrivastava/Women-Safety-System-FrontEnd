import React from 'react';
import useAuth from '../hooks/useAuth';

export default function Dashboard(){
  const { user } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.username} ({user?.role})</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
        <div style={{padding:12,border:'1px solid #ddd'}}>Active Alerts: <strong>5</strong></div>
        <div style={{padding:12,border:'1px solid #ddd'}}>Recent: <strong>3</strong></div>
        <div style={{padding:12,border:'1px solid #ddd'}}>Map snapshot here</div>
      </div>
    </div>
  );
}