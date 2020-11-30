import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const StyledFooter = styled.footer`
  align-items: center;
  background: ${props => props.theme.black};
  bottom: 0;
  display: flex;
  font-size: 1.4rem;
  height: 60px;
  justify-content: space-between;
  padding: 15px 20px;
  position: absolute;
  width: 100%;
  z-index: 2;

  p {
    margin: 0;
  }

  span {
    color: ${props => props.theme.lightblue};
  }

  a {
    color: ${props => props.theme.white};
    margin: 0 10px;
    opacity: 0.6;
    transition: opacity 0.3s;

    svg {
      transform: none;
      transition: transform 0.3s;
    }

    &:hover,
    &:focus {
      opacity: 1;
      transform: scale(1.2);

      & svg {
        transform: scale(1.1);
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        hellkat<span>_</span> digital production &copy; 2021
      </p>
      <div>
        <a
          href="mailto:boxcutter14@gmail.com"
          aria-label="Send an email to hdp_"
        >
          <EmailIcon fontSize="large" />
        </a>
        <a
          href="https://twitter.com/hellkat_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow hdp_ on Twitter"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/hellkat1911/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check out hdp_ on GitHub"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
