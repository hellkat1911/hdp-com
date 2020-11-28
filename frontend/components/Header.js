import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  background: ${props => props.theme.lightgrey};
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const StyledIcon = styled.img`
  height: 50px;
  margin: 20px 30px;
  transform: none;
  transition: transform 0.3s ease-in-out;
  width: 50px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <StyledIcon
            src="/images/hellcat-128x128.png"
            alt="hellkat_ digital production"
          />
        </a>
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
