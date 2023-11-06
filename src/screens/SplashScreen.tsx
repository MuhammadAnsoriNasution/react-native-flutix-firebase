import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from '../assets/images';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

export default function SplashScreen({ navigation }: Props) {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={theme.whiteColor} barStyle="dark-content" />
        <View style={styles.container}>
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.containerTitleSub}>
            <Text style={styles.title}>New Experience</Text>
            <Text style={styles.subtitle}>
              Watch a new movie much easier than any before
            </Text>
          </View>
          <View style={styles.wrapperAction}>
            <Atoms.Button.RectButton
              onPress={() => navigation.navigate('SignUpScreen')}
              label="Get Started"
            />
            <Atoms.QuestionWithAction
              question="Already have an account? "
              actionLabel="Sign In"
              onPress={() => navigation.navigate('SignInScreen')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  container: {
    backgroundColor: theme.whiteColor,
    paddingTop: 100,
    paddingHorizontal: 55,
    paddingBottom: 70,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 70,
  },
  logo: {
    width: 130,
    height: 136,
  },
  containerTitleSub: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    width: 190,
  },
  title: {
    fontSize: 20,
    ...theme.styles.blackTextFont,
  },
  subtitle: {
    ...theme.styles.greyTextFont,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
  },
  wrapperAction: {
    alignItems: 'center',
    display: 'flex',
    gap: 19,
    width: '100%',
  },
});
