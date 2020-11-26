import React from 'react';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import StyledNav from './styles/StyledNav';
import StyledNavMobile from './styles/StyledNavMobile';

const Nav = () => {
  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </StyledNav>
      <StyledNavMobile>
        <MenuIcon color="inherit" fontSize="inherit" />
      </StyledNavMobile>
    </>
  );
};

export default Nav;
