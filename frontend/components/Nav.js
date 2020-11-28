import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, MenuItem, Fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StyledNav from './styles/StyledNav';
import StyledNavMobile from './styles/StyledNavMobile';

const Nav = () => {
  const [elem, setElem] = useState(null);

  const handleClick = e => {
    setElem(e.currentTarget);
  };

  const handleClose = () => {
    setElem(null);
  };

  const StyledMenu = styled(Menu)`
    & .MuiMenu-paper {
      background: ${props => props.theme.black};
      color: ${props => props.theme.white};
      min-width: 150px;
      top: 50px;
    }
  `;

  const StyledMenuItem = styled(MenuItem)`
    &.MuiMenuItem-root {
      font-family: 'Jost', sans-serif;
      font-size: 1.8rem;
      justify-content: center;

      a {
        color: ${props => props.theme.white};
      }
    }
  `;

  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </StyledNav>
      <StyledNavMobile>
        <MenuIcon
          color="inherit"
          fontSize="inherit"
          aria-controls="mobile-nav"
          aria-haspopup="true"
          onClick={handleClick}
        />
        <StyledMenu
          id="mobile-nav"
          keepMounted
          elevation={3}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          style={{ top: 40 }}
          anchorEl={elem}
          open={!!elem}
          onClose={handleClose}
        >
          <StyledMenuItem onClick={handleClose}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </StyledMenuItem>
        </StyledMenu>
      </StyledNavMobile>
    </>
  );
};

export default Nav;
