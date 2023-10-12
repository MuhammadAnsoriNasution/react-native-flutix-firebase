/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../routes';
import theme from '../utils/theme';
import * as images from './../assets/images';
import TextInput from '../components/atoms/input/TextInput';
type Props = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

export default function SignInScreen({}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>{'Welcome Back,\nExplorer!'}</Text>
        <TextInput label="Email Address" style={{ marginBottom: 27 }} />
        <TextInput label="Email Address" style={{ marginBottom: 27 }} />
      </View>
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
});
