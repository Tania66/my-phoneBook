import React from 'react';
import { Link, Nav } from './AppBar/AppBar.styled';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">PhoneBook</Link>

      <Link to="/contacts">Contacts</Link>
    </Nav>
  );
};

export default Navigation;
