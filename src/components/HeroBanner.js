import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

import {SliderBox} from 'react-native-image-slider-box';

const HeroContainer = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  padding: 14px 24px;
  font-size: 16px;
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
  let title;
  const ImageList = {
    images: [
      require('../imgs/poster.png'),
      require('../imgs/poster3.jpg'),
      require('../imgs/poster4.jpeg'),
    ],
  };
  const [active, setActive] = useState(0);
  if (active === 0) {
    title = 'The Croods: A New Age';
  } else if (active === 1) {
    title = 'Ready Player One';
  } else if (active === 2) {
    title = 'Free Guy';
  }

  return (
    <HeroContainer>
      <TextContainer>
        <Title>{title}</Title>
      </TextContainer>
      <SliderBox
        images={ImageList.images}
        currentImageEmitter={index => setActive(index)}
        dotColor="#FDC835"
        inactiveDotColor="#F4F5F4"
        // eslint-disable-next-line react-native/no-inline-styles
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
        }}
      />
    </HeroContainer>
  );
}

export default HeroBanner;
