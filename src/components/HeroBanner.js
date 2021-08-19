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
  height: 20%;
`;

const Title = styled.Text`
  padding: 14px 18px;
`;

const TextContainer = styled.View`
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: white;
  z-index: 40;
`;

function HeroBanner() {
  return (
    <HeroContainer>
      <TextContainer>
        <Title>The Croods: A New Age</Title>
      </TextContainer>
      <HeroImage source={require('../imgs/poster.png')} />
    </HeroContainer>
  );
}

export default HeroBanner;
