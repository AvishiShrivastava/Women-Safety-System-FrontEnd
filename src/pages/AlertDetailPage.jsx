import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function AlertDetailPage(){
  const { id } = useParams();
  const { user } = useAuth();
  return (
    <div>
      <h2>Alert Detail — #{id}</h2>
      <p>Role: {user?.role}</p>
      {user?.role === 'POLICE' ? (
        <div>
          <button>Accept</button>
          <button>Navigate</button>
          <button>Resolve</button>
          <div>Map + live positions (polyline) here</div>
        </div>
      ) : (
        <div>
          <button>Cancel SOS</button>
          <div>Read-only map showing police approach</div>
        </div>
      )}
    </div>
  );
}