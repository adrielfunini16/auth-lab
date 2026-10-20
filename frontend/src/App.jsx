import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkToken } from "./utils/auth.js";
import { setToken, getToken, removeToken } from "./utils/token.js";
import { AuthContext } from "./pages/contexts/AuthContext.js";
import Feed from "./pages/Feed/Feed.jsx";
import Login from "./pages/Login/Login.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Register from "./pages/Register/Register.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.jsx";
import * as auth from "./utils/auth.js";

export default function App() {
  const [isLoaggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = ({ name, email, password, confirmPassword }) => {
    if (password === confirmPassword) {
      auth
        .register({ name, email, password })
        .then((userData) => {
          navigate("/login");
        })
        .catch(console.error);
    }
  };

  const handleAuthSuccess = (res) => {
    setAuthUser(res);
    setIsLoggedIn(true);
    navigate("/feed");
  };

  const handleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((data) => {
        const token = data.token;
        setToken(token);
        return checkToken(token);
      })
      .then((userData) => {
        handleAuthSuccess(userData);
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    checkToken(token)
      .then((userData) => {
        handleAuthSuccess(userData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AuthContext.Provider value={{ handleLogout, authUser }}>
      <Routes>
        <Route
          path="/register"
          element={<Register handleRegistration={handleRegistration} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
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
    </AuthContext.Provider>
  );
}
