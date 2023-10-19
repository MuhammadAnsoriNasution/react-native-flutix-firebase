/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import * as Screens from '../screens';
import { Image, StyleSheet, View } from 'react-native';

import { HomeTabParamList } from './types';
import theme from '../utils/theme';
import * as images from '../assets/images';
import { Atoms } from '../components';
const Tab = createBottomTabNavigator<HomeTabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let Icon = images.ic_movie_grey;
          if (route.name === 'MovieScreen') {
            if (focused) {
              Icon = images.ic_movie;
            } else {
              Icon = images.ic_movie_grey;
            }
          } else if (route.name === 'TicketScreen') {
            if (focused) {
              Icon = images.ic_tickets;
            } else {
              Icon = images.ic_tickets_grey;
            }
          }
          return <Image source={Icon} style={styles.icon} />;
        },
        headerStyle: styles.navigator,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          backgroundColor: theme.whiteColor,
        },
        tabBarActiveTintColor: theme.blackColor,
        tabBarInactiveTintColor: theme.secondary3,
        tabBarLabelStyle: {
          ...theme.styles.blackTextFont,
          fontSize: 11,
          fontWeight: '500',
        },
      })}>
      <Tab.Screen
        name="MovieScreen"
        component={Screens.MovieScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Empty"
        listeners={{
          tabPress: e => {
            e.preventDefault();
            return null;
          },
        }}
        component={Screens.EmptyScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <Atoms.Button.FloatTabButton
              bgColor={theme.whiteColor}
              {...props}
            />
          ),
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navigator: {
    borderWidth: 0,
    backgroundColor: 'red',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
    borderWidth: 0,
  },
  icon: {
    width: 24,
    height: 18,
  },
});

export default BottomTabs;
