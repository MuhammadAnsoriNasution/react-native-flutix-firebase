import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import fontFamily from '../assets/fonts';
import images from '../assets/images';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function SplashScreen() {
  const ghQuery = useQuery({
    queryKey: ['https://api.github.com/repositories/207645083'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repositories/207645083')
        .then(ress => ress.data),
  });
  console.log(ghQuery.data?.full_name);
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
