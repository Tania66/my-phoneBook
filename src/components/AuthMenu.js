import React from 'react';
import { Link, Nav } from './AppBar/AppBar.styled';

export default function AuthMenu() {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Nav>
  );
}
