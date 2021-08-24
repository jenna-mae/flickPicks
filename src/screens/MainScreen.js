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
import axios from 'axios';
import MainList from '../components/MainList';
import HeroBanner from '../components/HeroBanner';
import PickGenre from '../components/PickGenre';
import ListItem from '../components/ListItem';
import PosterImage from '../components/PosterImage';
import MovieTitle from '../components/MovieTitle';
import HomeTitle from '../components/HomeTitle';
import Popularity from '../components/Popularity';

const MainScreen = props => {
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

  if (data.length === 0) {
    return <Text>Loading Data</Text>;
  }

  const handleClick = selectedItem => {
    setGenreTitle(selectedItem);
  };

  const MainScreenList = ({item}) => (
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
      <ScrollView>
        <HeroBanner />
        <PickGenre handleClick={handleClick.bind()} />
        <Button
          title="searchResults"
          onPress={() =>
            navigation.navigate('SearchResults', {name: 'SearchResults'})
          }>
          Search Results
        </Button>
        <HomeTitle>Top {genreTitle} Picks:</HomeTitle>
        <MainList
          data={data}
          scrollEnabled="false"
          renderItem={MainScreenList}
          numColumns={3}
          height={1330}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default MainScreen;
