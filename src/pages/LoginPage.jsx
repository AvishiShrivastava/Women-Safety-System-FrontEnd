import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
  const [username, setUsername] = useState('police1');
  const [role, setRole] = useState('POLICE');
  const auth = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      await auth.login({ username, role });
      nav('/');
    }catch(err){
      alert('Login failed');
    }
  };

  return (
    <div style={{maxWidth:420, margin:'40px auto', padding:20, border:'1px solid #eee', borderRadius:8}}>
      <h2>Login (dev)</h2>
      <form onSubmit={submit}>
        <div style={{marginBottom:10}}>
          <label>Username</label>
          <input value={username} onChange={e=>setUsername(e.target.value)} style={{width:'100%'}} />
        </div>
        <div style={{marginBottom:10}}>
          <label>Role</label>
          <select value={role} onChange={e=>setRole(e.target.value)} style={{width:'100%'}}>
            <option value="POLICE">POLICE</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{marginTop:12,fontSize:13,color:'#666'}}>This is a dev-only fake login. Replace with real API call when backend is available.</div>
    </div>
  );
}
