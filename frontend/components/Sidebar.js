import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: ${props => props.theme.darkgrey};
  box-shadow: 12px 0 24px 0 rgba(0, 0, 0, 0.15);
  height: 100%;
  left: 0;
  position: fixed;
  width: 300px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Sidebar = () => {
  return <StyledSidebar />;
};

export default Sidebar;
