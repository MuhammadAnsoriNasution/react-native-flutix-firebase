import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as images from '../../../assets/images';
import theme from '../../../utils/theme';
interface Props {
  onPress: () => void;
}
export default function CardTicket({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={images.poster} style={styles.images} />
      <View style={styles.detail}>
        <Text style={styles.title}>Avengers: Infinity Wars</Text>
        <Text style={styles.genre}>Action – English</Text>
        <Text style={styles.genre}>CGV Paris van Java Mall</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  images: {
    width: 70,
    height: 90,
    borderRadius: 8,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
  },
  genre: {
    ...theme.styles.greyTextFont,
    fontSize: 12,
  },
});
