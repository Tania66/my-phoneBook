import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../redux/auth/authSelector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
