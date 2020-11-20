import React from 'react';
import Link from 'next/link';
import StyledNav from './styles/StyledNav';

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
