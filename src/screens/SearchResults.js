import * as React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MainList from '../components/MainList';
import ListItem from '../components/ListItem';
import PosterImage from '../components/PosterImage';
import MovieTitle from '../components/MovieTitle';
import SearchTitle from '../components/SearchTitle';
import Popularity from '../components/Popularity';

const SearchResults = props => {
  const navigation = props.navigation;

  const BASE_URL = 'https://api.themoviedb.org/3';
  const api = axios.create({baseURL: BASE_URL});
  const api_key = '5b1ff1ffc116295cb168d449b74b2dad';
  const getMovies = api.get('movie/now_playing', {params: {api_key}});
  const [data, setData] = React.useState([]);
  const [genreTitle, setGenreTitle] = React.useState('Kids');

  React.useEffect(() => {
    getMovies.then(response => {
      setData(response.data.results);
    });
  }, [getMovies]);

  const SearchScreenList = ({item}) => (
    <ListItem
      onPress={() =>
        navigation.navigate('Details', {
          poster: item.poster_path,
          genre: [item.genre_ids],
          name: item.title,
          description: item.overview,
        })
      }>
      <PosterImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
      />
      <MovieTitle>{item.title}</MovieTitle>
      <Popularity stars={item.popularity} />
    </ListItem>
  );

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#1E032B'}}>
      <SearchTitle>Search Results for "{genreTitle}"</SearchTitle>
      <MainList data={data} renderItem={SearchScreenList} numColumns={3} />
    </SafeAreaView>
  );
};
export default SearchResults;
