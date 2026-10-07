import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, isLoaggedIn }) {
  if (!isLoaggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
