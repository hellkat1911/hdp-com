import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: ${props => props.theme.darkgrey};
  box-shadow: 12px 0 24px 0 rgba(0, 0, 0, 0.15);
  height: calc(100% - 60px);
  left: 0;
  overflow-y: scroll;
  padding: 100px 30px 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 300px;
  z-index: 1;

  @media (max-width: 974px) {
    display: none;
  }
`;

const StyledH4 = styled.h4`
  font-family: 'Orbitron Black', sans-serif;
  font-size: 3rem;
  opacity: ${props => 1 - props.index * (props.length / 100)};
  transform: skew(-10deg);

  span {
    color: ${props => props.theme.lightblue};
  }
`;

const Sidebar = () => {
  // make a dummy array of 10 elements
  const hpds = [...Array(10).keys()];

  return (
    <StyledSidebar>
      {hpds.map((_, index) => (
        <StyledH4 key={index} index={index} length={hpds.length}>
          hdp<span>_</span>
        </StyledH4>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
