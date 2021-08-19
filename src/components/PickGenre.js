import * as React from 'react';
import styled from 'styled-components';
import SelectDropdown from 'react-native-select-dropdown';

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

function PickGenre() {
  const genres = ['comedy', 'horror', 'action'];
  return (
    <Container>
      <Title>Let's Pick a Genre</Title>
      <SelectDropdown
        // eslint-disable-next-line react-native/no-inline-styles
        buttonStyle={{borderRadius: 20}}
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
