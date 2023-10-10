import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import fontFamily from '../assets/fonts';

export default function SplashScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>SplashScreen</Text>
      <Text style={styles.text2}>SplashScreen</Text>
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
