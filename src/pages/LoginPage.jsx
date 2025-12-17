import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("CIVIL");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) {
      alert("Enter username");
      return;
    }

    login(username, role);   // ✅ SET USER
    navigate("/");           // ✅ GO TO DASHBOARD
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login (dev)</h2>

      <label>Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Role</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="CIVIL">CIVIL</option>
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
