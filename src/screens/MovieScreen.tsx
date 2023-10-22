import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as images from '../assets/images';
import { HomeTabScreenProps } from '../routes/types';
import theme from '../utils/theme';
import { Atoms } from '../components';
import { MovieTypes } from '../types/movie';

type Props = HomeTabScreenProps<'MovieScreen'>;

export default function MovieScreen({}: Props) {
  const movies: MovieTypes[] = [
    {
      id: 1,
      title: 'Halo',
      voteAverage: 0,
      overview: '',
      posterPath: '',
      backdropPath: '',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={theme.mainColor} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.wrapperUserPic}>
            <Image source={images.user_pic} style={styles.userPic} />
          </View>
          <View style={styles.wrapperUserInfo}>
            <Text style={styles.name}>Angga Risky</Text>
            <Text style={styles.totalAmount}>IDR 22.523</Text>
          </View>
        </View>
        {/* Now Playing */}
        <View style={styles.wrapperPlaying}>
          <Text style={styles.playingLabel}>Now Playing</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movies}
            renderItem={({ item, index }) => {
              return (
                <Atoms.Card.CardMovie
                  movie={item}
                  isFirst={index === 0}
                  isLast={index === movies.length - 1}
                />
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary4,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.mainColor,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: theme.mainColor,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  wrapperUserPic: {
    borderWidth: 2,
    borderColor: theme.mainColor2,
    borderRadius: 60,
    height: 60,
    width: 60,
    padding: 5,
  },
  userPic: {
    width: '100%',
    height: '100%',
  },
  wrapperUserInfo: {
    display: 'flex',
    gap: 4,
  },
  name: {
    ...theme.styles.whiteNumberFont,
    fontSize: 18,
  },
  totalAmount: {
    ...theme.styles.yellowNumberFont,
    fontSize: 14,
    fontWeight: '400',
  },
  wrapperPlaying: {
    marginTop: 30,
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
  },
  playingLabel: {
    marginLeft: 24,
    ...theme.styles.blackTextFont,
    fontSize: 16,
  },
});
