import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CastTypes } from '../../../types/credit';
import { imageBaseUrl } from '../../../utils/config';
import theme from '../../../utils/theme';
import * as images from '../../../assets/images';
interface Props {
  isFirst: boolean;
  isLast: boolean;
  cast: CastTypes;
}
export default function CardCrew({ isFirst, isLast, cast }: Props) {
  return (
    <View
      style={[
        styles.container,
        { marginLeft: isFirst ? 24 : 16, marginRight: isLast ? 24 : 0 },
      ]}>
      <Image
        source={
          cast.profile_path === undefined ||
          cast.profile_path === null ||
          cast.profile_path === ''
            ? images.user_pic
            : { uri: `${imageBaseUrl}w185${cast.profile_path ?? ''}` }
        }
        style={styles.image}
      />
      <Text style={styles.name}>{cast.name}</Text>
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
