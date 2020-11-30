import styled from 'styled-components';

const StyledMain = styled.main`
  background: ${props => props.theme[props.bgColor] || props.theme.darkgrey};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 2.2rem;
  margin-top: 20px;
  padding: 20px 30px 20px;

  h3 {
    font-family: 'Orbitron Black', sans-serif;
    font-size: 3rem;
    margin: 0 0 20px;
    text-align: center;
  }

  h5 {
    font-size: 3rem;
    margin-bottom: 10px;
    opacity: 0.8;

    @media (max-width: 519px) {
      font-size: 2.5rem;
    }
  }

  ul {
    @media (max-width: 519px) {
      padding-left: 20px;
    }

    li {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 519px) {
    font-size: 1.8rem;
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

export default StyledMain;
