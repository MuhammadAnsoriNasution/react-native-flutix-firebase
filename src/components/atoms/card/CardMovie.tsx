import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Atoms } from '../..';
import * as images from '../../../assets/images';
import { MovieTypes } from '../../../types/movie';
import { colorconvert } from '../../../utils/colorconvert';
import theme from '../../../utils/theme';
interface Props {
  movie: MovieTypes;
  isFirst: boolean;
  isLast: boolean;
  onPress: () => void;
}
export default function CardMovie({ isFirst, isLast, movie, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { marginLeft: isFirst ? 24 : 16, marginRight: isLast ? 24 : 0 },
      ]}>
      <ImageBackground
        source={images.poster}
        resizeMode="cover"
        style={{ flex: 1, position: 'relative' }}>
        <LinearGradient
          colors={[
            colorconvert(theme.blackColor, 0.6),
            colorconvert(theme.blackColor, 0),
          ]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{ flex: 1 }}>
          <View style={styles.wrapperInfo}>
            <Text style={styles.title}>{movie.title}</Text>
            <Atoms.RatingStart
              voteAverage={8}
              starSize={0}
              color={theme.whiteColor}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.mainColor,
    height: 140,
    width: 210,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  wrapperInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    ...theme.styles.whiteTextFont,
    fontSize: 14,
    marginBottom: 4,
  },
});
