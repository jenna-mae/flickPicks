import * as React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import MainList from '../components/MainList';
import ListItem from '../components/ListItem';
import PosterImage from '../components/PosterImage';
import MovieTitle from '../components/MovieTitle';
import SearchTitle from '../components/SearchTitle';
import Popularity from '../components/Popularity';

const SearchResults = props => {
  const navigation = props.navigation;
  const ListData = [
    {title: 'Croods', key: 'Details', page: 'Details'},
    {title: 'Croods2', key: 'Details2', page: 'Details'},
    {title: 'Croods3', key: 'Details3', page: 'Details'},
    {title: 'Croods4', key: 'Details4', page: 'Details'},
    {title: 'Croods5', key: 'Details5', page: 'Details'},
    {title: 'Croods6', key: 'Details6', page: 'Details'},
    {title: 'Croods7', key: 'Details7', page: 'Details'},
    {title: 'Croods8', key: 'Details8', page: 'Details'},
    {title: 'Croods9', key: 'Details9', page: 'Details'},
  ];

  const SearchScreenList = ({item}) => (
    <ListItem onPress={() => navigation.navigate(item.page, {name: item.key})}>
      <PosterImage source={require('../imgs/poster.png')} />
      <MovieTitle>{item.title}</MovieTitle>
      <Popularity stars="2000" />
    </ListItem>
  );

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#1E032B'}}>
      <SearchTitle>Search Results for "kids"</SearchTitle>
      <MainList data={ListData} renderItem={SearchScreenList} numColumns={3} />
    </SafeAreaView>
  );
};
export default SearchResults;
