import { Header, Logo } from './AppBar.styled';
import { MdContactPhone } from 'react-icons/md';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/authSelector';

export const AppBar = () => {
  const login = useSelector(isLogin);
  return (
    <Header>
      <Logo>
        <MdContactPhone size={25} color="white" />
        <Navigation />
      </Logo>
      
      {login ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
};


