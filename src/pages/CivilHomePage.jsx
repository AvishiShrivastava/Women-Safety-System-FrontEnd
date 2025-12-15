import React from 'react';

export default function CivilHomePage(){
  return (
    <div>
      <h2>Civil Home</h2>
      <p>Big SOS button below (mobile-style). Submit SOS -> POST /api/alert/sos when backend is available.</p>
      <button style={{fontSize:20,padding:'12px 24px'}}>SOS — Send Help</button>
    </div>
  );
}