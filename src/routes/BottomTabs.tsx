import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../screens';
import { HomeTabParamList } from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MovieScreen"
        component={Screens.MovieScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TicketScreen"
        component={Screens.TicketScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
