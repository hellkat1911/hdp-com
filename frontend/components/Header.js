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
  height: 120px;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
`;

const Wordmark = styled.div`
  padding: 15px 25px;
  h1 {
    font-family: 'Orbitron Black', 'Arial Black', sans-serif;
    font-size: 4rem;
    letter-spacing: 0.3rem;
    margin: 0;

    span {
      color: ${props => props.theme.lightblue};
    }
  }

  img {
    margin-right: 5px;
    max-width: 50px;
  }

  p {
    color: ${props => props.theme.white};
    font-family: 'Orbitron', Arial, sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.12rem;
    margin: 5px 0 0;
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
