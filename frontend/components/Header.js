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
  background: ${props => props.theme.blue};
  box-shadow: ${props => props.theme.bs};
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
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
