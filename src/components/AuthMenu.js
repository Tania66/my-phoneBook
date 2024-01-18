import React from 'react';
import { Link } from './AppBar/AppBar.styled';

export default function AuthMenu() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
