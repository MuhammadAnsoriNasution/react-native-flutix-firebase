import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import * as images from '../../../assets/images';
import theme from '../../../utils/theme';
export default function CardTransactionHistoryWallet() {
  return (
    <View style={styles.container}>
      <Image source={images.droppath} style={styles.image} />
      <View style={styles.containerDetail}>
        <Text style={styles.title}>Avengers: Infinity Wars</Text>
        <Text style={styles.amount}>Rp. 650.000</Text>
        <Text style={styles.desc}>CGV Paris van Java Mall</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 70,
    height: 90,
    borderRadius: 8,
  },
  containerDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
  },
  amount: {
    ...theme.styles.whiteNumberFont,
    color: theme.greenColor,
    fontSize: 12,
  },
  desc: {
    ...theme.styles.whiteNumberFont,
    fontSize: 12,
    color: theme.greyColor3,
  },
});
