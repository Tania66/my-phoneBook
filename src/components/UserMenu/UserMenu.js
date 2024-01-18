import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { selectUser } from '../../redux/auth/authSelector';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}
