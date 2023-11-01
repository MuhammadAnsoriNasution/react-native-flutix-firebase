import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import { Atoms, Moleculs } from '../components';
import theme from '../utils/theme';
import * as images from '../assets/images';
type Props = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export default function SuccessScreen({ navigation }: Props) {
  return (
    <Moleculs.ContainerScreen
      barStyle="dark-content"
      bgStatusBar={theme.whiteColor}>
      <View style={styles.container}>
        <Image source={images.top_up_done} style={styles.topUpDone} />
        <View style={styles.containerMsg}>
          <Text style={styles.title}>Happy Watching!</Text>
          <Text style={styles.desc}>
            {'You have successfully\nbought the ticket'}
          </Text>
        </View>
        <View style={styles.footer}>
          <Atoms.Button.RectButton
            label="My Tickets"
            onPress={() =>
              navigation.navigate('MainScreen', { screen: 'TicketScreen' })
            }
          />
          <View style={styles.containerDiscover}>
            <Text style={styles.discover}>Discover new movie? </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MainScreen', { screen: 'MovieScreen' })
              }>
              <Text style={styles.textBackToHome}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 70,
    alignItems: 'center',
    paddingVertical: 70,
  },
  topUpDone: {
    width: 150,
    height: 150,
    marginTop: 16,
  },
  containerMsg: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
  },
  desc: {
    ...theme.styles.greyTextFont,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '400',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
  },
  containerDiscover: {
    display: 'flex',
    flexDirection: 'row',
  },
  discover: {
    ...theme.styles.greyTextFont,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  textBackToHome: {
    ...theme.styles.purpleTextFont,
    fontSize: 14,
    lineHeight: 22,
  },
});
