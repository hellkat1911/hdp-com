import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, MenuItem, Fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StyledNav from './styles/StyledNav';
import StyledNavMobile from './styles/StyledNavMobile';

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
      text-align: center;
      width: 100%;
    }
  }
`;

const CustomMobileNav = () => {
  const [elem, setElem] = useState(null);

  const handleOpen = e => {
    setElem(e.currentTarget);
  };

  const handleLink = link => {
    setElem(null);
    Router.push(link);
  };

  const handleClose = () => {
    setElem(null);
  };

  return (
    <StyledNavMobile>
      <MenuIcon
        color="inherit"
        fontSize="inherit"
        aria-controls="mobile-nav"
        aria-haspopup="true"
        onClick={handleOpen}
      />
      <StyledMenu
        id="mobile-nav"
        keepMounted
        elevation={3}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
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
        <StyledMenuItem onClick={() => handleLink('/contact')}>
          Contact
        </StyledMenuItem>
      </StyledMenu>
    </StyledNavMobile>
  );
};

const Nav = () => {
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
      <CustomMobileNav />
    </>
  );
};

export default Nav;
