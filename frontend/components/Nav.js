import React from 'react';
import Link from 'next/link';
import StyledNav from './styles/StyledNav';

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Test 1</a>
      </Link>
      <Link href="/">
        <a>Test 2</a>
      </Link>
      <Link href="/">
        <a>Test 3</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
