import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import DetailPosterImage from '../components/DetailPosterImage';
import DetailHeaderText from '../components/DetailHeaderText';
import DetailHeader2Text from '../components/DetailHeader2Text';
import DetailText from '../components/DetailText';

const Details = ({route, navigation}) => {
  const {poster, genre, name, description} = route.params;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#1E032B'}}>
      <ScrollView>
        <DetailPosterImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster}`,
          }}
        />
        <DetailHeaderText>{name}</DetailHeaderText>
        <DetailText>{genre}</DetailText>
        <DetailHeader2Text>Description</DetailHeader2Text>
        <DetailText>{description}</DetailText>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
