// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Screens from './src/screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
  SplashScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HomeScreen" component={Screens.IndexScreen} />
        <Stack.Screen name="DetailScreen" component={Screens.DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
