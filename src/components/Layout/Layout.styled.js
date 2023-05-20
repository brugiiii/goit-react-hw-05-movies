import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  color: #121212;

  &.active {
    color: #e75480;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledNav = styled.nav`
  padding: 20px 0 20px 40px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;
