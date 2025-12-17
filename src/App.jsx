import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AlertsPage from "./pages/AlertsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
