import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../assets/images';
import theme from '../utils/theme';

export default function SplashScreen() {
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
            <Pressable style={styles.btnStarted}>
              <Text style={styles.btnStartedLabel}>Get Started</Text>
            </Pressable>
            <View style={styles.wrapperQuestion}>
              <Text style={styles.question}>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.questionAction}>Sign In</Text>
              </TouchableOpacity>
            </View>
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
    display: 'flex',
    gap: 19,
    width: '100%',
  },
  btnStarted: {
    backgroundColor: theme.mainColor,
    paddingTop: 11,
    paddingBottom: 13,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnStartedLabel: {
    ...theme.styles.whiteTextFont,
  },
  wrapperQuestion: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
  },
  question: {
    ...theme.styles.greyTextFont,
    fontSize: 14,
    fontWeight: '400',
  },
  questionAction: {
    ...theme.styles.purpleTextFont,
    fontWeight: '500',
  },
});
