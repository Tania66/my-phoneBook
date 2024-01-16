import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-radius: 0 0 5px 5px;
  background: #7e8fdd;
`;

export const Logo = styled.div``;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  color: #fdfdff;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;

  &.active {
    color: white;
    background-color: #9cdfdf;
  }
`;
