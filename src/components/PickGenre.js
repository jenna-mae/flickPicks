import * as React from 'react';
import styled from 'styled-components';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';

const Container = styled.View`
  margin: 40px 20px;
  padding: 30px 0px;
  background-color: #490768;
  border-radius: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
`;

function PickGenre(props) {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const api = axios.create({baseURL: BASE_URL});
  const api_key = '5b1ff1ffc116295cb168d449b74b2dad';
  const getGenres = api.get('genre/movie/list', {params: {api_key}});
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    getGenres.then(response => {
      setGenres(response.data.genres);
    });
  }, [getGenres]);
  const genreArray = [];
  const genreList = genres;
  genreList.forEach(genre => {
    genreArray.push(genre.name);
  });
  return (
    <Container>
      <Title>Let's Pick a Genre</Title>
      <SelectDropdown
        // eslint-disable-next-line react-native/no-inline-styles
        buttonStyle={{borderRadius: 20}}
        data={genreArray}
        onSelect={(selectedItem, index) => {
          props.handleClick(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={item => {
          return item;
        }}
      />
    </Container>
  );
}

export default PickGenre;
