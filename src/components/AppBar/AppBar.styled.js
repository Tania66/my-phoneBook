import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 320px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-radius: 0 0 10px 10px;
  background: #7e8fdd;
  box-shadow: 0px 6px 16px 0px rgba(46, 74, 117, 0.44);
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 14px 20px;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

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

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 15px;
    padding: 4px 8px;
  }
`;
