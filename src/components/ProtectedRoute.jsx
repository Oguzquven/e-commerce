// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.client.user);

  console.log("ProtectedRoute - User:", user); // Debug için ekle

  // Token veya email var mı kontrol et
  if (!user || (!user.email && !localStorage.getItem("token"))) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
