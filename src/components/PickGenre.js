import * as React from 'react';
import styled from 'styled-components';
import SelectDropdown from 'react-native-select-dropdown';

const Container = styled.View`
  margin: 40px;
  padding: 20px;
  background-color: #490768;
  border-radius: 20px;
  text-align: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  text-align: center;
`;

function PickGenre() {
  const genres = ['comedy', 'horror', 'action'];
  return (
    <Container>
      <Title>Let's Pick a Genre</Title>
      <SelectDropdown
        data={genres}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
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
