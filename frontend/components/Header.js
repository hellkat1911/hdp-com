import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const TopNav = styled.nav`
  background: ${props => props.theme.blue};
  box-shadow: ${props => props.theme.bs};
  color: ${props => props.theme.white};
  height: 120px;
  padding: 15px 25px;
`;

const Wordmark = styled.div`
  position: relative;

  h1 {
    /* color: ${props => props.theme.grey}; */
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
    font-family: 'Jost', Arial, sans-serif;
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
    <TopNav>
      <Wordmark>
        <Flex>
          <img src="/images/hellkat-icon.png" />
          <h1>
            hdp<span>_</span>
          </h1>
        </Flex>
        <p>hellkat digital production</p>
      </Wordmark>
    </TopNav>
  );
};

export default Header;
