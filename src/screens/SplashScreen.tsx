import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import fontFamily from '../assets/fonts';
import images from '../assets/images';

export default function SplashScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>SplashScreen</Text>
      <Text style={styles.text2}>SplashScreen</Text>
      <Image source={images.arrow} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.openSans[300],
    fontSize: 30,
  },
  text2: {
    fontFamily: fontFamily.openSans[700],
    fontSize: 30,
  },
});
