import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Wordmark from '../components/Wordmark';
import StyledMarquee from '../components/styles/StyledMarquee';
import StyledMain from '../components/styles/StyledMain';

const StyledGridContainer = styled(Grid)`
  @media (max-width: 1279px) {
    flex-direction: column-reverse;
  }
`;

const StyledGridItem = styled(Grid)`
  width: 100%;
`;

const StyledImageContainer = styled.div`
  position: relative;
  text-align: center;

  img {
    max-width: 100%;
    transform: scaleX(-1) rotate(5deg);

    &:nth-of-type(2) {
      animation: rock 2s infinite;
      position: absolute;
      left: calc(50% - 130px);
      top: 45px;
      width: 60px;

      @keyframes rock {
        0% {
          transform: rotate(-10deg);
        }
        50% {
          transform: rotate(10deg);
        }
        100% {
          transform: rotate(-10deg);
        }
      }

      @media (max-width: 499px) {
        left: 17%;
        top: 18%;
        width: 15%;
      }
    }
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
        <StyledGridContainer container spacing={0} alignItems="center">
          <StyledGridItem item md={12} lg={6}>
            <StyledImageContainer>
              <img src="/images/normal-cat.png" alt="Squishy cat" />
              <img src="/images/skull-128x128.png" alt="Spooky skull" />
            </StyledImageContainer>
          </StyledGridItem>
          <Grid item md={12} lg={6}>
            <p>
              I'm a U.S.-based full-stack developer who's passionate about the
              web and information security. While currently under construction,
              this site will soon be a destination for some awesome content,
              including:
            </p>
            <ul>
              <li>highlights from my latest projects and clients</li>
              <li>reviews of tools, packages, and frameworks</li>
              <li>
                how-to's for a variety of web dev topics, including React, Node,
                AWS, and Devops
              </li>
              <li>updates on my infosec journey, pwns, and certs</li>
              <li>thirst traps of my dope gaming PC</li>
            </ul>
            <p>Thanks for visiting, and check back soon!</p>
          </Grid>
        </StyledGridContainer>
      </StyledMain>
    </>
  );
};

export default Home;
