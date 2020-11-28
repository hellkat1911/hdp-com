import styled from 'styled-components';
import Wordmark from '../components/Wordmark';

const StyledMarquee = styled.div`
  align-items: center;
  background: rgba(244, 0, 118, 0.77);
  border: 4px solid ${props => props.theme.white};
  border-radius: 5px;
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron Black', sans-serif;
  justify-content: space-between;
  min-height: 300px;
  padding: 3rem;

  @media (max-width: 699px) {
    padding-top: 6rem;
  }

  @media (max-width: 519px) {
    justify-content: center;
  }

  h2 {
    margin-top: 0;
    text-align: center;

    span {
      color: ${props => props.theme.lightblue};
    }

    @media (max-width: 519px) {
      font-size: 2.2rem;
      margin-top: 25px;
    }
  }
`;

const StyledMain = styled.main`
  font-size: 2.2rem;
  padding-top: 50px;

  & ul {
    @media (max-width: 519px) {
      padding-left: 20px;
    }
  }

  & li::marker {
    color: ${props => props.theme.lightblue};
  }

  @media (max-width: 519px) {
    font-size: 1.8rem;
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

const Home = () => {
  return (
    <>
      <StyledMarquee>
        <Wordmark />
        <h2>
          hellkat<span>_</span> digital production
        </h2>
      </StyledMarquee>
      <StyledMain>
        <p>
          I'm a U.S.-based full-stack developer who's passionate about the web
          and information security. While currently under construction, this
          site will soon be a destination for some awesome content, including:
        </p>
        <ul>
          <li>highlights from my latest projects and clients</li>
          <li>reviews of tools, packages, and frameworks</li>
          <li>
            how-to's for a variety of web dev topics, including React, Node,
            AWS, and Devops
          </li>
          <li>updates on my infosec journey, pwns, and certs</li>
        </ul>
        <p>Thanks for visiting, and check back soon!</p>
      </StyledMain>
    </>
  );
};

export default Home;
