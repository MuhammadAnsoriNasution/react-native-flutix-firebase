import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import * as images from '../assets/images';
type Props = NativeStackScreenProps<
  RootStackParamList,
  'AccountConfirmationScreen'
>;

export default function AccountConfirmationScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Atoms.HeaderPage
        title={'Confirm\nNew Account'}
        onPress={() => navigation.goBack()}
      />
      <Atoms.Gap height={90} />
      <View style={styles.wrapperAccount}>
        <Image source={images.user_pic} style={styles.pic} />
        <Atoms.Gap height={20} />
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={[styles.welcome, styles.name]}>
          Muhammad Ansori Nasution
        </Text>
        <Atoms.Gap height={110} />
        <Atoms.Button.RectButton
          background="green"
          onPress={() =>
            navigation.navigate('MainScreen', { screen: 'MovieScreen' })
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
