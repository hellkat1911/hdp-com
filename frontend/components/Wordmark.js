import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 10px 30px 22px;
  position: relative;

  @media (max-width: 767px) {
    padding: 5px 30px 22px;
  }

  h1 {
    color: ${props => props.theme.white};
    font-family: 'Orbitron Black', sans-serif;
    font-size: 6rem;
    letter-spacing: 0.3rem;
    line-height: 1.2;
    margin: 0;
    text-shadow: -2px 2px 4px ${props => props.theme.black};

    @media (max-width: 767px) {
      display: none;
    }

    span {
      color: ${props => props.theme.lightblue};
    }
  }

  img {
    height: 50px;
    margin-right: 10px;
    max-width: 100%;
    position: relative;
    top: 10px;
    width: 50px;

    @media (max-width: 767px) {
      height: 60px;
      top: 5px;
      width: 60px;
    }
  }

  p {
    color: ${props => props.theme.white};
    font-family: 'Orbitron', Arial, sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.12rem;
    margin: 0 0 0 5px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Wordmark = props => {
  return (
    <Link href="/">
      <a>
        <StyledContainer>
          {props.children}
          <Flex>
            <img
              key={'/images/hellcat_128x128.png'}
              src="/images/hellcat-128x128.png"
            />
            <h1>
              hdp<span>_</span>
            </h1>
          </Flex>
        </StyledContainer>
      </a>
    </Link>
  );
};

export default Wordmark;
