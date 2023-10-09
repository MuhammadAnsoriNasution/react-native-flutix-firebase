// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Screens from './src/screens';

export type RootStackParamList = {
  Home: undefined;
  DetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screens.IndexScreen} />
        <Stack.Screen name="DetailScreen" component={Screens.DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
