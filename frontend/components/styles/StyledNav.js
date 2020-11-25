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
    transition: color 0.25s linear;

    &:before {
      background: ${props => props.theme.white};
      bottom: 0;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform: skew(-10deg);
      width: 2px;
    }

    &:after {
      background: ${props => props.theme.lightblue};
      content: '';
      height: 2px;
      left: 50%;
      margin-top: 3rem;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      width: 0;
    }

    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

export default StyledNav;
