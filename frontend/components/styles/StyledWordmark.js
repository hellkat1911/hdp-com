import styled from 'styled-components';

const StyledWordmark = styled.div`
  h1 {
    color: ${props => props.theme.white};
    font-family: 'Orbitron Black', sans-serif;
    font-size: 10rem;
    letter-spacing: 0.3rem;
    line-height: 1.2;
    margin: 0;
    text-shadow: -2px 2px 4px ${props => props.theme.black};

    span {
      color: ${props => props.theme.lightblue};
    }

    @media (max-width: 519px) {
      font-size: 8rem;
    }
  }

  div {
    display: flex;
    position: relative;
  }

  img {
    cursor: pointer;
    height: 60px;
    position: absolute;
    right: 15px;
    top: 30px;
    width: 60px;

    @media (max-width: 519px) {
      height: 50px;
      right: 10px;
      top: 20px;
      width: 50px;
    }
  }

  p {
    animation: blink 2.5s infinite step-end;
    background: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.black};
    color: ${props => props.theme.black};
    left: 300px;
    min-width: 160px;
    padding: 5px 10px;
    position: absolute;
    text-align: center;
    top: 24px;
    white-space: nowrap;

    @keyframes blink {
      0% {
        opacity: 0;
      }
      45% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }

    @media (max-width: 699px) {
      left: 0;
      min-width: 280px;
      top: -55px;
    }

    @media (max-width: 519px) {
      left: 0;
      min-width: 230px;
      top: -60px;
    }

    &::before {
      background: ${props => props.theme.white};
      border: 2px solid ${props => props.theme.black};
      border-right: none;
      border-top: none;
      bottom: 12px;
      content: '';
      display: inline-block;
      height: 10px;
      left: -6.5px;
      position: absolute;
      transform: rotate(45deg);
      width: 10px;

      @media (max-width: 699px) {
        bottom: -7px;
        left: 243px;
        transform: rotate(-45deg);
      }

      @media (max-width: 519px) {
        left: 195px;
      }
    }
  }
`;

export default StyledWordmark;
