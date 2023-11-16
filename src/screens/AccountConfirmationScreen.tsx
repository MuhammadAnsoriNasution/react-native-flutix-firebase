import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { shallow } from 'zustand/shallow';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';
import useSignUpStore from '../store/signUpStore';
import theme from '../utils/theme';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AccountConfirmationScreen'
>;

export default function AccountConfirmationScreen({ navigation }: Props) {
  const { account, preference } = useSignUpStore(
    state => ({
      preference: state.preference,
      account: state.account,
    }),
    shallow,
  );

  const handleCreateAccount = () => {
    auth()
      .createUserWithEmailAndPassword(account.email, account.password)
      .then(ress => {
        console.log('account success created');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'error',
            text1: 'That email address is already in use!',
          });
        } else if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            text1: 'That email address is invalid!',
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Failed to create user',
          });
        }
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Atoms.HeaderPage
        title={'Confirm\nNew Account'}
        onPress={() => navigation.goBack()}
      />
      <Atoms.Gap height={90} />
      <View style={styles.wrapperAccount}>
        <Image source={{ uri: account.avatarPath }} style={styles.pic} />
        <Atoms.Gap height={20} />
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={[styles.welcome, styles.name]}>{account.fullName}</Text>
        <Atoms.Gap height={110} />
        <Atoms.Button.RectButton
          background="green"
          onPress={() =>
            // navigation.navigate('MainScreen', { screen: 'MovieScreen' })
            handleCreateAccount()
          }
          label="Create My Account"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  wrapperAccount: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  pic: {
    width: 150,
    height: 150,
    borderRadius: 150,
    resizeMode: 'cover',
  },
  welcome: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '400',
  },
  name: {
    fontWeight: '500',
  },
});
