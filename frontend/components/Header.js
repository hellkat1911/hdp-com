import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Wordmark from './Wordmark';
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

const StyledIcon = styled.div`
  padding: 30px 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Wordmark />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
