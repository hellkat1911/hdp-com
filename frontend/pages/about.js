import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {
  Save as SaveIcon,
  Computer as ComputerIcon,
  Code as CodeIcon,
  Headset as HeadsetIcon,
} from '@material-ui/icons';
// import ComputerIcon from '@material-ui/icons/Computer';
import StyledMarquee from '../components/styles/StyledMarquee';
import StyledMain from '../components/styles/StyledMain';

const CustomMarquee = styled(StyledMarquee)`
  img {
    transform: scaleX(-1);
  }
`;

const CustomMain = styled(StyledMain)`
  h5 {
    align-items: center;
    display: flex;

    svg {
      margin-right: 10px;
    }
  }
  p {
    margin: 0;
  }

  ul {
    padding-left: 25px;

    li {
      margin-bottom: 10px;
    }
  }
`;

const About = () => {
  return (
    <>
      <CustomMarquee>
        <h1>
          About me<span>_</span>
        </h1>
        <img src="/images/skull-128x128.png" alt="Pixel skull" />
      </CustomMarquee>
      <CustomMain>
        <h3>Tech I use</h3>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6}>
            <h5>
              <SaveIcon fontSize="inherit" />
              Software
            </h5>
            <ul>
              <li>Browser &ndash; Firefox Developer Edition</li>
              <li>IDE &ndash; VS Code</li>
              <li>API testing &ndash; Postman</li>
              <li> Terminal emulator &ndash; iTerm</li>
              <li>Shell &ndash; zsh</li>
              <li>Font &ndash; Dank Mono</li>
            </ul>
          </Grid>
          <Grid item sm={12} md={6}>
            <h5>
              <ComputerIcon fontSize="inherit" />
              Hardware
            </h5>
            <ul>
              <li>
                iMac (Late 2015, Retina 5K)
                <br />
                Intel i7
                <br />
                macOS 11.0.1 (Big Sur)
              </li>
              <li>
                Acer Aspire E5-575G-53VG
                <br />
                Intel i5
                <br />
                Ubuntu 20.04
              </li>
              <li>
                Gaming PC
                <br />
                Intel i7 / RTX 2080 Ti
                <br />
                Windows 10
              </li>
            </ul>
          </Grid>
        </Grid>
      </CustomMain>
      <CustomMain>
        <h3>Stuff I like</h3>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6}>
            <h5>
              <CodeIcon fontSize="inherit" />
              Current focus
            </h5>
            <ul>
              <li>HackTheBox.eu</li>
              <li>TCM Security's courses</li>
              <li>TypeScript</li>
              <li>Next.js / Apollo / Prism stack</li>
            </ul>
          </Grid>
          <Grid item sm={12} md={6}>
            <h5>
              <HeadsetIcon fontSize="inherit" />
              Podcasts
            </h5>
            <ul>
              <li>Nerd Canon</li>
              <li>Darknet Diaries</li>
              <li>Syntax.fm</li>
            </ul>
          </Grid>
        </Grid>
      </CustomMain>
    </>
  );
};

export default About;
