import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const theme = {
  lightblue: '#00f6ed',
  blue: '#1282a2',
  white: '#ededed',
  grey: '#2e2c2f',
  black: '#110b11',
  maxWidth: '1200px',
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
    background: ${theme.black};
    color: ${props => props.theme.white};
    font-family: 'Jost', sans-serif;
    font-size: 1.8rem;
    height: 100vh;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-family: 'PICO-8', sans-serif;
  }
  a {
    color: ${theme.lightblue};
    text-decoration: none;
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.white};
`;

const Inner = styled.div`
  background: ${props => props.theme.grey};
  border-radius: 10px;
  margin: 50px auto 0;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
`;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
        <Footer />
      </StyledPage>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
