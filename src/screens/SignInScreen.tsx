/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import * as images from './../assets/images';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { regexEmail, regexPassword } from '../utils/regex';

type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

export default function SignInScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleSignIn = () => {
    if (!regexEmail.test(formData.email)) {
      Toast.show({
        type: 'info',
        text1: 'Info',
        text2: 'Email not valid',
      });
    } else if (!regexPassword.test(formData.password)) {
      Toast.show({
        type: 'info',
        text1: 'Info',
        text2:
          'Password must be at least 6 characters long, contain at least one digit, one uppercase character, one lowercase character and one special character [@ # $ % !]',
      });
    } else {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword('ansorinasution@gmail.com', 'Test123@')
        .then(() => {
          setLoading(false);
          navigation.replace('MainScreen', { screen: 'MovieScreen' });
        })
        .catch(error => {
          setLoading(false);
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
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
              disabled={loading}
              onPress={handleSignIn}
            />
            <Atoms.QuestionWithAction
              actionLabel="Sign Up"
              question="Start fresh now? "
              onPress={() => navigation.navigate('SignUpScreen')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
