import React from 'react';
import { Link, Nav } from './AppBar/AppBar.styled';
import { useSelector } from 'react-redux';
import { isLogin } from '../redux/auth/authSelector';

const Navigation = () => {
  const isLoggedIn = useSelector(isLogin);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};

export default Navigation;
