import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import * as images from '../../../assets/images';
import theme from '../../../utils/theme';
interface Props {
  isFirst: boolean;
  isLast: boolean;
  name: string;
}
export default function CardCrew({ isFirst, isLast, name }: Props) {
  return (
    <View
      style={[
        styles.container,
        { marginLeft: isFirst ? 24 : 16, marginRight: isLast ? 24 : 0 },
      ]}>
      <Image source={images.droppath} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    width: 70,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  name: {
    ...theme.styles.blackTextFont,
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
});
