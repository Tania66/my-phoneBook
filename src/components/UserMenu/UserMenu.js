import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { selectUser } from '../../redux/auth/authSelector';
import {
  ButtonLogout,
  Image,
  UserContainer,
  UserName,
} from './UserMenu.styled';
import defaultAvatar from './defaul-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatar = defaultAvatar;

  return (
    <UserContainer>
      <Image src={avatar} alt="avatar" />
      <UserName>Hello, {user.name}</UserName>
      <ButtonLogout onClick={() => dispatch(logout())}>Logout</ButtonLogout>
    </UserContainer>
  );
}
