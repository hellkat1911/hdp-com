import React from 'react';
import Link from 'next/link';
import StyledNav from './styles/StyledNav';

const Nav = () => {
  return (
    <StyledNav>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/test-1">
        <a>Test 1</a>
      </Link>
      <Link href="/test-2">
        <a>Test 2</a>
      </Link>
      <Link href="/test-3">
        <a>Test 3</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;
