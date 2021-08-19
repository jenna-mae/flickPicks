import * as React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import HeroBanner from '../components/HeroBanner';
import PickGenre from '../components/PickGenre';
import ListItem from '../components/ListItem';
import PosterImage from '../components/PosterImage';
import MovieTitle from '../components/MovieTitle';

const MainScreen = props => {
  const navigation = props.navigation;
  const ListData = [
    {title: 'Croods', key: 'Details', page: 'Details'},
    {title: 'Croods2', key: 'Details2', page: 'Details'},
    {title: 'Croods3', key: 'Details3', page: 'Details'},
  ];

  const MainList = ({item}) => (
    <ListItem onPress={() => navigation.navigate(item.page, {name: item.key})}>
      <PosterImage source={require('../imgs/poster.png')} />
      <MovieTitle>{item.title}</MovieTitle>
      <Text>X X X X X</Text>
    </ListItem>
  );

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#1E032B'}}>
      <HeroBanner />
      <PickGenre />
      <Text>Top Kids Picks:</Text>
      <Button
        title="searchResults"
        onPress={() =>
          navigation.navigate('SearchResults', {name: 'SearchResults'})
        }>
        Search Results
      </Button>
      <FlatList
        data={ListData}
        renderItem={MainList}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default MainScreen;
