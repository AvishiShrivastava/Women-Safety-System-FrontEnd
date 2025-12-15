import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import RoleRoute from './components/RoleRoute';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import AlertDetailPage from './pages/AlertDetailPage';
import LiveTrackingPage from './pages/LiveTrackingPage';
import CivilHomePage from './pages/CivilHomePage';
import SOSHistoryPage from './pages/SOSHistoryPage';
import ProfilePage from './pages/ProfilePage';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<PrivateRoute><AppLayout/></PrivateRoute>}>
          <Route index element={<Dashboard/>} />
          <Route path="profile" element={<ProfilePage/>} />

          <Route path="alerts" element={<RoleRoute allowedRoles={["POLICE"]}><AlertsPage/></RoleRoute>} />
          <Route path="live" element={<RoleRoute allowedRoles={["POLICE"]}><LiveTrackingPage/></RoleRoute>} />

          <Route path="sos" element={<RoleRoute allowedRoles={["CIVIL"]}><CivilHomePage/></RoleRoute>} />
          <Route path="sos-history" element={<RoleRoute allowedRoles={["CIVIL"]}><SOSHistoryPage/></RoleRoute>} />

          <Route path="alert/:id" element={<AlertDetailPage/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function AppLayout(){
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <NavBar />
      <div style={{flex:1, padding:20}}>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  );
}