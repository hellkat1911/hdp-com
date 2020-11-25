import React from 'react';
import Link from 'next/link';
import StyledNav from './styles/StyledNav';

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>About</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
