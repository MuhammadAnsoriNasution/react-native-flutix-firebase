import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, PixelRatio, Platform, StyleSheet, View } from 'react-native';
import fontFamily from '../assets/fonts';
import * as images from '../assets/images';
import BgBottomBar from '../assets/svg/BgBottomBar';
import { Atoms } from '../components';
import * as Screens from '../screens';
import theme from '../utils/theme';
import { HomeTabParamList, RootStackParamList } from './types';
const Tab = createBottomTabNavigator<HomeTabParamList>();
type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;
function BottomTabs({ navigation }: Props) {
  // const { setLogout } = useFirebaseAuthStore(state => state);

  // const handleLogout = () => {
  //   setLogout(true);
  // };
  return (
    <Tab.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={({ route }) => ({
        tabBarBackground: () => <BgBottomBar />,
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
          height: PixelRatio.getPixelSizeForLayoutSize(
            Platform.OS === 'android' ? 25 : 35,
          ),
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          // backgroundColor: theme.redColor,
          paddingBottom: 14,
          margin: 0,
        },
        tabBarActiveTintColor: theme.blackColor,
        tabBarInactiveTintColor: theme.secondary3,
        tabBarLabelStyle: {
          fontFamily: fontFamily.raleWay[500],
          fontSize: 11,
        },
        tabBarIconStyle: {
          margin: 0,
          marginBottom: 0,
          marginTop: 10,
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
            navigation.navigate('TopUpScreen');
            // handleLogout();
          },
        }}
        component={Screens.EmptyScreen}
        options={{
          tabBarButton: props => <Atoms.Button.FloatTabButton {...props} />,
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
