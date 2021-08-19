import * as React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  margin: 40px;
  padding: 20px;
  background-color: #490768;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  text-align: center;
`;

function PickGenre() {
  return (
    <Container>
      <Title>Let's Pick a Genre</Title>
    </Container>
  );
}

export default PickGenre;
