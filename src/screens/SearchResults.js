import * as React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const MainScreen = props => {
  const navigation = props.navigation;
  const ListData = [
    {title: 'Croods', key: 'Details', page: 'Details'},
    {title: 'Croods2', key: 'Details2', page: 'Details'},
    {title: 'Croods3', key: 'Details3', page: 'Details'},
  ];

  const ListItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.page, {name: item.key})}>
      <Image source={require('../imgs/poster.png')} />
      <Text>{item.title}</Text>
      <Text>X X X X X</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      {/* <Image source={require('../imgs/poster.png')} /> */}
      <Text>Search Results for "kids"</Text>
      <FlatList data={ListData} renderItem={ListItem} />
    </SafeAreaView>
  );
};
export default MainScreen;
