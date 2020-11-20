import styled from 'styled-components';

const StyledNav = styled.ul`
  display: flex;
  font-size: 2rem;
  justify-self: end;
  margin: 0;
  padding: 0;
  a {
    align-items: center;
    border: 0;
    color: ${props => props.theme.white};
    cursor: pointer;
    display: flex;
    padding: 0 3rem;
    position: relative;
    text-transform: uppercase;
    background: none;

    &:before {
      background: ${props => props.theme.white};
      content: '';
      display: inline-block;
      height: 100%;
      position: absolute;
      left: 0;
      transform: skew(-10deg);
      width: 2px;
    }
  }
`;

export default StyledNav;
