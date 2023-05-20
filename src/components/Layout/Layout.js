import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { StyledLink, NavList, StyledNav } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <StyledNav>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="movies">Movies</StyledLink>
          </li>
        </NavList>
      </StyledNav>

      <main>
        <Suspense
          fallback={
            <ThreeDots
              color="#e75480"
              wrapperStyle={{ justifyContent: 'start' }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
