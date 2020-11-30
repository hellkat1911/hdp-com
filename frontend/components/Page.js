import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const theme = {
  white: '#ededed',
  lightblue: '#00f6ed',
  darklightblue: '#00A39E',
  blue: '#0077b6',
  pink: '#f40076',
  lightgrey: '#48454A',
  grey: '#2e2c2f',
  darkgrey: '#1F1E1F',
  black: '#110b11',
  bgPink: 'rgba(244, 0, 118, 0.77)',
  border: '4px solid #ededed',
  borderRadius: '5px',
  maxWidth: '151.5rem',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Orbitron.ttf');
  }
  @font-face {
    font-family: 'Orbitron Black';
    font-style: bold;
    font-weight: 800;
    src: url('/fonts/Orbitron.ttf');
  }
  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Jost.ttf');
  }
  @font-face {
    font-family: 'PICO-8';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/PICO-8.ttf');
  }

  html {
    box-sizing: border-box;
    font-family: 'Jost';
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${theme.grey};
    color: ${props => props.theme.white};
    font-family: 'Jost', sans-serif;
    font-size: 1.8rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Orbitron Black', sans-serif;
  }

  a {
    color: ${props => props.theme.white};
    outline: none;
    text-decoration: none;
  }

  a.textlink {
    color: ${theme.lightblue};
    outline: none;
    position: relative;
    text-decoration: none;
    transition: color 0.4s linear;

      &:after {
        background: ${theme.pink};
        content: '';
        height: 2px;
        left: 50%;
        margin-top: 3rem;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        width: 0;
      }

      &:hover,
      &:focus {
        color: ${theme.darklightblue};
        outline: none;

        &:after {
          width: 100%;
        }
      }
  }

  li {
      &::marker {
        color: ${props => props.theme.pink};
      }
    }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.white};
  min-height: 100vh;
  padding-bottom: 3rem;
  position: relative;
`;

const Inner = styled.div`
  margin: 50px auto 0;
  max-width: ${props => props.theme.maxWidth};
  padding-bottom: 6rem;
  padding-left: 31.5rem;
  padding-right: 1.5rem;

  @media (max-width: 974px) {
    max-width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Sidebar />
        <Inner>{props.children}</Inner>
        <Footer />
      </StyledPage>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
