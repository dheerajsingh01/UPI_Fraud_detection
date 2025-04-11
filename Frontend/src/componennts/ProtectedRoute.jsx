import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // You'll need to create this context

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;