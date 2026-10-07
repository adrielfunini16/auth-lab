import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Feed from "./pages/Feed/Feed.jsx";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Register from "./pages/Register/Register.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.jsx";

export default function App() {
  const [isLoaggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/feed"
        element={
          <ProtectedRoute isLoaggedIn={isLoaggedIn}>
            <Feed />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isLoaggedIn={isLoaggedIn}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to={isLoaggedIn ? "/feed" : "/login"} replace />}
      />
    </Routes>
  );
}
