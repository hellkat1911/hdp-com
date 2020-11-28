import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: ${props => props.theme.darkgrey};
  box-shadow: 12px 0 24px 0 rgba(0, 0, 0, 0.15);
  height: calc(100% - 60px);
  left: 0;
  margin-bottom: 60px;
  overflow-y: scroll;
  padding: 100px 30px 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 300px;
  z-index: 1;

  h4 {
    font-family: 'Orbitron Black', sans-serif;
    font-size: 3rem;
    transform: skew(-10deg);

    span {
      color: ${props => props.theme.lightblue};
    }
  }

  @media (max-width: 974px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
      <h4>
        hdp<span>_</span>
      </h4>
    </StyledSidebar>
  );
};

export default Sidebar;
