import * as React from 'react';
import styled from 'styled-components';

const HeroImage = styled.Image`
  min-width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const HeroContainer = styled.View`
  position: relative;
  width: 100%;
  height: 25%;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: white;
  z-index: 40;
  padding: 14px;
  border-radius: 500px;
`;

function HeroBanner() {
  return (
    <HeroContainer>
      <Title>The Croods: A New Age</Title>
      <HeroImage source={require('../imgs/poster.png')} />
    </HeroContainer>
  );
}

export default HeroBanner;
