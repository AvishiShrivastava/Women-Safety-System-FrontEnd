import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Menu } from 'antd';

export default function NavBar(){
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => { logout(); nav('/login'); };

  const policeItems = [
    { key:'dashboard', label: <Link to="/">Dashboard</Link> },
    { key:'alerts', label: <Link to="/alerts">Alerts</Link> },
    { key:'live', label: <Link to="/live">Live Tracking</Link> },
    { key:'profile', label: <Link to="/profile">Profile</Link> },
  ];
  const civilItems = [
    { key:'sos', label: <Link to="/sos">SOS</Link> },
    { key:'history', label: <Link to="/sos-history">SOS History</Link> },
    { key:'profile', label: <Link to="/profile">Profile</Link> },
  ];

  const items = user?.role === 'POLICE' ? policeItems : civilItems;

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 16px', borderBottom:'1px solid #eee'}}>
      <div style={{fontWeight:700}}>Human Safety System</div>
      <div style={{flex:1, marginLeft:20}}>
        <Menu mode="horizontal" selectable={false} items={items} />
      </div>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div>{user?.username || 'Guest'}</div>
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
}
