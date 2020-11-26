import styled from 'styled-components';

const StyledNavMobile = styled.nav`
  align-self: center;
  color: ${props => props.theme.white};
  font-size: 4rem;
  justify-self: end;
  padding: 0 30px;

  svg {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StyledNavMobile;
