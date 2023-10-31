import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../routes/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Atoms, Moleculs } from '../components';
import theme from '../utils/theme';
import * as images from '../assets/images';
import ItemOrder from '../components/atoms/ItemOrder';
type Props = NativeStackScreenProps<RootStackParamList, 'CheckoutScreen'>;

export default function CheckoutScreen({}: Props) {
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      titleHeadePage={'Checkout\nMovie'}>
      <View style={styles.container}>
        <View style={styles.containerDetailMovie}>
          <Image source={images.poster} style={styles.poster} />
          <View style={styles.detailMovie}>
            <Text style={styles.title}>Avengers: Infinity Wars</Text>
            <Text style={styles.genre}>Action – English</Text>
            <Atoms.RatingStart voteAverage={7} color={theme.greyColor3} />
          </View>
        </View>
        <Atoms.Gap height={20} />
        <View style={styles.lineHorizontal} />
        <Atoms.Gap height={22} />
        <View style={styles.containerOrder}>
          <ItemOrder label="ID Order" value="22081996" />
          <ItemOrder label="Cinema" value="Paris Van Java" />
          <ItemOrder label="Date & Time" value="Sat 21, 12:20" />
          <ItemOrder label="Seat Number" value="B3, B4" />
          <ItemOrder label="Price" value="Rp 12.500.000 x 2" />
          <ItemOrder label="Fee" value="Rp 290.000 x 2" />
          <ItemOrder label="Total" value="Rp 25.106.000" valueSemiBold={true} />
        </View>
        <Atoms.Gap height={20} />
        <View style={styles.lineHorizontal} />
        <Atoms.Gap height={20} />
        <ItemOrder
          label="Your Wallet"
          value="Rp 25.106.000"
          valueSemiBold={true}
          colorValue={theme.greenColor}
        />
        <Atoms.Gap height={36} />
        <View style={styles.containerBtn}>
          <Atoms.Button.RectButton
            background="green"
            label="Checkout Now"
            onPress={() => {}}
          />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.defaultMargin,
  },
  containerDetailMovie: {
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  poster: {
    width: 70,
    height: 90,
    borderRadius: 8,
  },
  detailMovie: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
  },
  genre: { ...theme.styles.greyTextFont, fontSize: 12 },
  lineHorizontal: {
    borderWidth: 1,
    borderColor: theme.greyColor,
  },
  containerOrder: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  containerBtn: { display: 'flex', alignItems: 'center', marginBottom: 20 },
});
