import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { selectUser } from '../../redux/auth/authSelector';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>{user}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
