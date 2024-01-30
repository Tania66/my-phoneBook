import { Header, Img, Logo } from './AppBar.styled';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/authSelector';
import defaultAvatar from './default-phoneBook.png' 

export const AppBar = () => {
  const login = useSelector(isLogin);
  const avatar = defaultAvatar;
  return (
    <Header>
      <Logo>
<Img src={avatar} alt='phonebook'/>
        <Navigation />
      </Logo>
      
      {login ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
};


