import Router from 'next/router';
import Link from 'next/link';
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
  background: ${props => props.theme.blue};
  box-shadow: ${props => props.theme.bs};
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
`;

const Wordmark = styled.div`
  padding: 5px 25px 15px;
  h1 {
    font-family: 'Orbitron Black', 'Arial Black', sans-serif;
    font-size: 8rem;
    letter-spacing: 0.3rem;
    margin: 0;

    span {
      color: ${props => props.theme.lightblue};
    }
  }

  img {
    height: 90px;
    margin-left: -12px;
    margin-right: 5px;
    margin-top: 2px;
    max-width: 100%;
    width: 90px;
  }

  p {
    color: ${props => props.theme.white};
    font-family: 'Orbitron', Arial, sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.12rem;
    margin: 2px 0 10px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Wordmark>
        <Flex>
          <img src="/images/hellcat-128x128.png" />
          <h1>
            hdp<span>_</span>
          </h1>
        </Flex>
        <p>hellkat_ digital production</p>
      </Wordmark>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
