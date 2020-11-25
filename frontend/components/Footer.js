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

  span {
    left: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>hellkat_ digital production &copy; 2021</span>
    </StyledFooter>
  );
};

export default Footer;
