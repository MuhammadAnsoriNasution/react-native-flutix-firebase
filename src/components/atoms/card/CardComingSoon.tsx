import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import * as images from '../../../assets/images';
import { MovieTypes } from '../../../types/movie';
interface Props {
  movie: MovieTypes;
  isFirst: boolean;
  isLast: boolean;
}

export default function CardComingSoon({ movie, isFirst, isLast }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { marginLeft: isFirst ? 24 : 16, marginRight: isLast ? 24 : 0 },
      ]}>
      <ImageBackground
        source={images.droppath}
        style={{ flex: 1 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
