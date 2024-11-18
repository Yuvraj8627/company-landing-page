import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  text-align: center;
  padding: 50px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 2.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #4fa3f7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #006bb3;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <Title>Get Started</Title>
    <Subtitle>Welcome to our internal landing page</Subtitle>
    <Button>Learn More</Button>
  </HeroWrapper>
);

export default Hero;
