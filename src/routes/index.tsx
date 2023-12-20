import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import * as Screens from '../screens';
import useFirebaseAuthStore from '../store/FirebaseAuth';
import useUserStore from '../store/userStore';
import BottomTabs from './BottomTabs';
import * as RootNavigation from './RootNavigation';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Routes() {
  const { setLogout, isLogout } = useFirebaseAuthStore(state => state);
  const { updateProfile, profile } = useUserStore(state => state);
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => setLogout(false))
      .catch(() => setLogout(false));
  };

  useEffect(() => {
    if (isLogout === true) {
      handleLogout();
      RootNavigation.navigate('SignInScreen');
    }
  }, [isLogout]);

  useEffect(() => {
    if (profile.id !== '') {
      const subscriber = firestore()
        .collection('users')
        .doc(profile.id)
        .onSnapshot(documentSnapshot => {
          const data = documentSnapshot?.data();
          if (data !== undefined) {
            updateProfile({
              id: profile.id,
              fullName: data.name,
              email: data.email,
              avatarPath: data.profilePciture,
              balance: data.balance,
              favoriteGenre: data.selectedGenres.split(','),
              language: data.selectedLanguage,
              password: '',
              confirmPassword: '',
              avatarUpload: profile.avatarUpload,
              isAuth: true,
            });
          } else {
            // updateProfile(initialProfile);
          }
        });
      // Stop listening for updates when no longer required
      return () => subscriber();
    }
  }, [profile.id]);

  useEffect(() => {
    if (profile.isAuth === true) {
      RootNavigation.navigate('MainScreen', { screen: 'MovieScreen' });
    }
  }, [profile.isAuth]);

  return (
    <>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="AccountConfirmationScreen"
          component={Screens.AccountConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={Screens.CheckoutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={Screens.EditProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieDetailScreen"
          component={Screens.MovieDetailScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="PreferenceScreen"
          component={Screens.PreferenceScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={Screens.ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectScheduleScreen"
          component={Screens.SelectScheduleScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectSeatScreen"
          component={Screens.SelectSeatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={Screens.SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={Screens.SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={Screens.SuccessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TicketDetailScreen"
          component={Screens.TicketDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TopUpScreen"
          component={Screens.TopUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WalletScreen"
          component={Screens.WalletScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
