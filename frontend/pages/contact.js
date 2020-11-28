import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import StyledMarquee from '../components/styles/StyledMarquee';
import StyledMain from '../components/styles/StyledMain';

const CustomMain = styled(StyledMain)`
  border: 3px solid ${props => props.theme.white};
  padding: 3rem;

  a {
    align-items: center;
    display: inline-flex;
    font-size: 3rem;
    justify-content: flex-start;
    margin-bottom: 30px;

    span {
      color: ${props => props.theme.white};
      font-size: 2.8rem;
      margin: 0 20px;

      @media (max-width: 519px) {
        font-size: 2.2rem;
      }
    }

    svg {
      transition: transform 0.3s ease-in-out;
    }

    svg:hover {
      transform: scale(1.1);
    }
  }
`;

const Contact = () => {
  return (
    <>
      <StyledMarquee>
        <h1>
          Questions? Like to hack stuff? Need dev work?
          <br />
          <br />
          Hit us up<span>_</span>
        </h1>
      </StyledMarquee>
      <CustomMain>
        <a href="mailto:boxcutter14@gmail.com">
          <EmailIcon fontSize="inherit" color="inherit" />
          <span>
            boxcutter14
            <wbr />
            @gmail.com
          </span>
        </a>
        <br />
        <a
          href="https://github.com/hellkat1911"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="inherit" color="inherit" />
          <span>hellkat1911</span>
        </a>
        <br />
        <a
          href="https://twitter.com/hellkat_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="inherit" color="inherit" />
          <span>@hellkat_</span>
        </a>
      </CustomMain>
    </>
  );
};

export default Contact;
