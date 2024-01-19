import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { selectUser } from '../../redux/auth/authSelector';
import { ButtonLogout, UserContainer, UserName } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserContainer>
      <UserName>Welcome, {user.name}</UserName>
      <ButtonLogout onClick={() => dispatch(logout())}>Logout</ButtonLogout>
    </UserContainer>
  );
}
