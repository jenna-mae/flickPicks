import * as React from 'react';
import {SafeAreaView} from 'react-native';

import DetailPosterImage from '../components/DetailPosterImage';
import DetailHeaderText from '../components/DetailHeaderText';
import DetailHeader2Text from '../components/DetailHeader2Text';
import DetailText from '../components/DetailText';

const Details = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#1E032B'}}>
      <DetailPosterImage source={require('../imgs/poster.png')} />
      <DetailHeaderText>The Croods: A New Age (2020)</DetailHeaderText>
      <DetailText>
        Rated G • 2020-11-25(CA) • Animation, Family, Adventure, Fantasy, Comedy
        • 1h 35m
      </DetailText>
      <DetailHeader2Text>Description</DetailHeader2Text>
      <DetailText>
        Searching for a safer habitat, the prehistoric Crood family discovers an
        idyllic, walled-in paradise that meets all of its needs. Unfortunately,
        they must also learn to live with the Bettermans -- a family that's a
        couple of steps above the Croods on the evolutionary ladder. As tensions
        between the new neighbors start to rise, a new threat soon propels both
        clans on an epic adventure that forces them to embrace their
        differences, draw strength from one another, and survive together.
      </DetailText>
    </SafeAreaView>
  );
};
export default Details;
