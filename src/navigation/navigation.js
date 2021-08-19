import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import SearchResults from '../screens/SearchResults';
import Details from '../screens/Details';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Main Screen'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Details'}}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={{title: 'SearchResults'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
