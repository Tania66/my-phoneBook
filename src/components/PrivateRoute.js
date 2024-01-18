import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogin, isRefreshing } from '../redux/auth/authSelector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const refreshing = useSelector(isRefreshing);
  const isLoggedIn = useSelector(isLogin);
  const shouldRedirect = !isLoggedIn && !refreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
