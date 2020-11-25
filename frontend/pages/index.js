import styled from 'styled-components';

const StyledHome = styled.main`
  div {
    align-items: center;
    display: flex;
    margin-bottom: 20px;

    h1 {
      margin: 0 0 0 20px;
    }

    img {
      height: 50px;
      margin-top: -5px;
      width: 50px;
    }
  }
  span {
    color: ${props => props.theme.lightblue};
  }
  hr {
    background: ${props => props.theme.lightblue};
    border: none;
    height: 2px;
  }
  ul li::marker {
    color: ${props => props.theme.lightblue};
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <div>
        <img src="/images/hellcat-128x128.png" />
        <h1>Hello, world</h1>
      </div>
      <hr />
      <p>
        Welcome to hellkat<span>_</span> digital production!
      </p>
      <p>
        I'm a U.S.-based full-stack developer who's passionate about the web and
        information security. While currently under construction, this site will
        soon be a destination for some awesome content, including:
      </p>
      <ul>
        <li>highlights from my latest projects and clients</li>
        <li>reviews of tools, packages, and frameworks</li>
        <li>
          how-to's for a variety of web dev topics, including React, Node, AWS,
          and Devops
        </li>
        <li>updates on my infosec journey, pwns, and certs</li>
      </ul>
      <p>Thanks for visiting, and check back soon!</p>
    </StyledHome>
  );
};

export default Home;
