import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, MenuItem, Fade } from '@material-ui/core';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  InfoOutlined as InfoIcon,
  Email as EmailIcon,
} from '@material-ui/icons';
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

    svg {
      margin-right: 5px;
    }
  }
`;

const CustomMobileNav = () => {
  const router = useRouter();
  const [elem, setElem] = useState(null);

  const handleOpen = e => {
    setElem(e.currentTarget);
  };

  const handleLink = link => {
    setElem(null);
    router.push(link);
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
        <StyledMenuItem onClick={() => handleLink('/')}>
          <HomeIcon fontSize="large" />
          Home
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleLink('/about')}>
          <InfoIcon fontSize="large" />
          About
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleLink('/contact')}>
          <EmailIcon fontSize="large" />
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
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
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
