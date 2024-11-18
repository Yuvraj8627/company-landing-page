import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: center;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureItem = styled.div`
  width: 200px;
  margin: 20px;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2em;
  color: #4fa3f7;
`;

const Features = () => (
  <FeaturesWrapper id="features">
    <h2>Features</h2>
    <FeatureList>
      <FeatureItem>
        <FeatureTitle>Feature 1</FeatureTitle>
        <p>Details about feature 1.</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Feature 2</FeatureTitle>
        <p>Details about feature 2.</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Feature 3</FeatureTitle>
        <p>Details about feature 3.</p>
      </FeatureItem>
    </FeatureList>
  </FeaturesWrapper>
);

export default Features;
