import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>

      {!isAuthenticated ? (
        <p style={{ color: "red" }}>User not logged in</p>
      ) : (
        <>
          <p>
            Welcome, {user.username} ({user.role})
          </p>
          <button onClick={logout}>Logout</button>
        </>
      )}

      <hr />

      {/* Navigation */}
      <Link to="/alerts">Alerts</Link> |{" "}
      <Link to="/profile">Profile</Link>

      {/* Dashboard cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          marginTop: 16,
        }}
      >
        <div style={{ padding: 12, border: "1px solid #ddd" }}>
          Active Alerts: <strong>5</strong>
        </div>

        <div style={{ padding: 12, border: "1px solid #ddd" }}>
          Recent: <strong>3</strong>
        </div>

        <div style={{ padding: 12, border: "1px solid #ddd" }}>
          Map snapshot here
        </div>
      </div>
    </div>
  );
}
