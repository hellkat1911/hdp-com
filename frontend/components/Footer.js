import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.grey};
  bottom: 0;
  font-size: 1.4rem;
  height: 75px;
  padding: 15px 20px;
  position: fixed;
  width: 100%;

  p {
    left: 20px;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  span {
    color: ${props => props.theme.lightblue};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        hellkat<span>_</span> digital production &copy; 2021
      </p>
    </StyledFooter>
  );
};

export default Footer;
