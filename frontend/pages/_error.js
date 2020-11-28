import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StyledMain from '../components/styles/StyledMain';

const StyledH1 = styled.h1`
  font-family: 'PICO-8', sans-serif;
  font-size: 4rem;
  margin: 0 0 20px;
`;

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const FourOhFour = () => {
  const router = useRouter();

  const handleBack = e => {
    e.preventDefault();
    router.back();
  };

  return (
    <StyledMain>
      <StyledH1>404 - Not found :(</StyledH1>
      <p>The page you requested is either mythical or non-existent.</p>
      <p>Maybe it will exist in the future.</p>
      <p>But it's unlikely.</p>
      <StyledLink href="#" onClick={handleBack}>
        <ArrowBackIcon fontSize="large" />
        Go Back
      </StyledLink>
    </StyledMain>
  );
};

export default FourOhFour;
