import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';

const StyledFooter = styled.footer`
  align-items: center;
  background: ${props => props.theme.black};
  bottom: 0;
  display: flex;
  font-size: 1.4rem;
  height: 60px;
  justify-content: space-between;
  padding: 15px 20px;
  position: relative;
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
    opacity: 0.7;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 1;
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
          href="https://twitter.com/hellkat_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/hellkat1911/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon fontSize="large" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
