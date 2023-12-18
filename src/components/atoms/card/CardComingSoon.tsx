import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { MovieTypes } from '../../../types/movie';
import { imageBaseUrl } from '../../../utils/config';
interface Props {
  movie: MovieTypes;
  isFirst: boolean;
  isLast: boolean;
  onPress: () => void;
}

export default function CardComingSoon({
  movie,
  isFirst,
  isLast,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { marginLeft: isFirst ? 24 : 16, marginRight: isLast ? 24 : 0 },
      ]}>
      <ImageBackground
        source={{ uri: `${imageBaseUrl}w500${movie.poster_path}` }}
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
