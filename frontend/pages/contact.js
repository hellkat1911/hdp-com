import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const StyledMain = styled.main`
  color: ${props => props.theme.white};
  font-size: 4rem;

  div {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;

    a {
      color: ${props => props.theme.lightblue};

      & svg {
        transition: transform 0.3s ease-in-out;
      }

      & svg:hover {
        transform: scale(1.1);
      }
    }

    p {
      font-size: 2.8rem;
      margin: 0 20px;

      @media (max-width: 519px) {
        font-size: 2.2rem;
      }
    }
  }

  hr {
    background: ${props => props.theme.lightgrey};
    border: none;
    height: 3px;
  }
`;

const Contact = () => {
  return (
    <StyledMain>
      <h4>Questions? Comments? Need dev work? Hit me up.</h4>
      <div>
        <a href="mailto:boxcutter14@gmail.com">
          <EmailIcon fontSize="inherit" color="inherit" />
        </a>
        <p>boxcutter14@gmail.com</p>
      </div>
      <div>
        <a
          href="https://github.com/hellkat1911"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="inherit" color="inherit" />
        </a>
        <p>hellkat1911</p>
      </div>
      <div>
        <a
          href="https://twitter.com/hellkat_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="inherit" color="inherit" />
        </a>
        <p>@hellkat_</p>
      </div>
      <hr />
    </StyledMain>
  );
};

export default Contact;
