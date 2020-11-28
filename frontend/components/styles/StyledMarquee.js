import styled from 'styled-components';

const StyledMarquee = styled.div`
  align-items: center;
  background: ${props => props.theme.bgPink};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  font-family: 'Orbitron Black', sans-serif;
  justify-content: space-between;
  min-height: 300px;
  padding: 3rem;

  @media (max-width: 699px) {
    padding-top: 6rem;
  }

  h1 {
    font-size: 4rem;

    @media (max-width: 519px) {
      font-size: 3rem;
    }
  }

  h2 {
    margin-top: 0;
    text-align: center;

    @media (max-width: 519px) {
      font-size: 2.2rem;
      margin-top: 25px;
    }
  }

  span {
    color: ${props => props.theme.lightblue};
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export default StyledMarquee;
