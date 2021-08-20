import * as React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MainList from '../components/MainList';
import HeroBanner from '../components/HeroBanner';
import PickGenre from '../components/PickGenre';
import ListItem from '../components/ListItem';
import PosterImage from '../components/PosterImage';
import MovieTitle from '../components/MovieTitle';
import HomeTitle from '../components/HomeTitle';

const MainScreen = props => {
  const navigation = props.navigation;
  const ListData = [
    {title: 'Croods', key: 'Details', page: 'Details'},
    {title: 'Croods2', key: 'Details2', page: 'Details'},
    {title: 'Croods3', key: 'Details3', page: 'Details'},
    {title: 'Croods4', key: 'Details4', page: 'Details'},
    {title: 'Croods5', key: 'Details5', page: 'Details'},
    {title: 'Croods6', key: 'Details6', page: 'Details'},
  ];

  const MainScreenList = ({item}) => (
    <ListItem onPress={() => navigation.navigate(item.page, {name: item.key})}>
      <PosterImage source={require('../imgs/poster.png')} />
      <MovieTitle>{item.title}</MovieTitle>
      <Text>X X X X X</Text>
    </ListItem>
  );

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#1E032B'}}>
      <ScrollView>
        <HeroBanner />
        <PickGenre />
        <Button
          title="searchResults"
          onPress={() =>
            navigation.navigate('SearchResults', {name: 'SearchResults'})
          }>
          Search Results
        </Button>
        <HomeTitle>Top Kids Picks:</HomeTitle>
        <MainList data={ListData} renderItem={MainScreenList} numColumns={3} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default MainScreen;
