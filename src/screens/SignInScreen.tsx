import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import { regexEmail, regexPassword } from '../utils/regex';
import theme from '../utils/theme';
import * as images from './../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

export default function SignInScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleSignIn = () => {
    // if (!regexEmail.test(formData.email)) {
    //   Toast.show({
    //     type: 'info',
    //     text1: 'Info',
    //     text2: 'Email not valid',
    //   });
    // } else if (!regexPassword.test(formData.password)) {
    //   Toast.show({
    //     type: 'info',
    //     text1: 'Info',
    //     text2:
    //       'Password must be at least 6 characters long, contain at least one digit, one uppercase character, one lowercase character and one special character [@ # $ % !]',
    //   });
    // } else {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        setLoading(false);
        navigation.replace('MainScreen', { screen: 'MovieScreen' });
      })
      .catch(error => {
        setLoading(false);
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
        } else if (error.code === 'auth/invalid-login') {
          Toast.show({
            type: 'error',
            text1: 'Unauthorized',
            text2: 'Please check your email and password',
          });
        } else {
          console.log(error);
          Toast.show({
            type: 'error',
            text1: 'Server busy, try again later!',
          });
        }
      });
    // }
  };
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      barStyle="dark-content">
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>{'Welcome Back,\nExplorer!'}</Text>
        <Atoms.Input.TextInput
          label="Email Address"
          style={{ marginBottom: 27 }}
          value={formData.email}
          onChangeText={e =>
            setFormData(p => ({ password: p.password, email: e }))
          }
        />
        <Atoms.Input.TextInput
          label="Password"
          style={{ marginBottom: 6 }}
          secureTextEntry={true}
          value={formData.password}
          onChangeText={e =>
            setFormData(p => ({ email: p.email, password: e }))
          }
        />
        <Atoms.QuestionWithAction
          question="Forgot Password? "
          onPress={() => console.log('')}
          actionLabel="Get Now"
        />
        <View style={styles.columnCenter}>
          <Atoms.Button.ButtonRoundedIcon
            name="arrowright"
            disabled={
              loading ||
              !regexEmail.test(formData.email) ||
              !regexPassword.test(formData.password)
            }
            onPress={handleSignIn}
          />
          <Atoms.QuestionWithAction
            actionLabel="Sign Up"
            question="Start fresh now? "
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: theme.defaultMargin,
    paddingTop: 30,
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  container: {
    paddingHorizontal: theme.defaultMargin,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    height: 70,
    width: 67,
    marginBottom: 70,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
    marginBottom: 51,
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 52,
    marginTop: 40,
    paddingBottom: 40,
  },
  btnSubmit: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: theme.greyColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelBtnSubmit: {},
});
