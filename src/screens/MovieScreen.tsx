/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as images from '../assets/images';
import { Atoms, Moleculs } from '../components';
import { HomeTabScreenProps } from '../routes/types';
import { MovieTypes } from '../types/movie';
import theme from '../utils/theme';
import { dataMovies } from '../assets/json/data.json';
type Props = HomeTabScreenProps<'MovieScreen'>;

export default function MovieScreen({ navigation }: Props) {
  const movies: MovieTypes[] = dataMovies;
  const genre = ['Horor', 'Music', 'Action', 'Drama', 'War', 'Crime'];

  return (
    <>
      <Moleculs.ContainerScreen
        barStyle="light-content"
        bgBody={theme.secondary4}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.wrapperUserPic}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image source={images.user_pic} style={styles.userPic} />
          </TouchableOpacity>
          <View style={styles.wrapperUserInfo}>
            <Text style={styles.name}>Angga Risky</Text>
            <Text style={styles.totalAmount}>IDR 22.523</Text>
          </View>
        </View>
        {/* Now Playing */}
        <View style={styles.wrapperPlaying}>
          <Atoms.Typhograpy.TitleCard title="Now Playing" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movies}
            renderItem={({ item, index }) => {
              return (
                <Atoms.Card.CardMovie
                  onPress={() => navigation.navigate('MovieDetailScreen')}
                  movie={item}
                  isFirst={index === 0}
                  isLast={index === movies.length - 1}
                />
              );
            }}
          />
        </View>

        {/* Genre */}
        <View style={styles.wrapperGenre}>
          {/* <Text style={styles.genreTitle}>Browse Movie</Text> */}
          <Atoms.Typhograpy.TitleCard title="Browse Movie" />
          <View style={styles.genreList}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={genre}
              renderItem={({ item, index }) => (
                <Atoms.Card.Genre genre={item} isFirst={index === 0} />
              )}
            />
          </View>
        </View>

        {/* Coming Soon */}
        <View
          style={[styles.wrapperPlaying, { marginBottom: 30, marginTop: 0 }]}>
          <Atoms.Typhograpy.TitleCard title="Coming Soon" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={movies}
            renderItem={({ item, index }) => {
              return (
                <Atoms.Card.CardComingSoon
                  movie={item}
                  isFirst={index === 0}
                  isLast={index === movies.length - 1}
                />
              );
            }}
          />
        </View>

        {/* Coming Soon */}
        <View
          style={[styles.wrapperPlaying, { marginBottom: 100, marginTop: 0 }]}>
          <Atoms.Typhograpy.TitleCard title="Get Lucky Day" />
          <View style={{ marginHorizontal: theme.defaultMargin }}>
            <Atoms.Card.CardLucky
              title="Student Holiday"
              tnc="Maximal only for two people"
              discount="50%"
            />
          </View>
        </View>
      </Moleculs.ContainerScreen>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: theme.accentColor1,
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
  wrapperGenre: {
    marginVertical: 30,
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
  },
  genreTitle: {
    ...theme.styles.blackTextFont,
    fontSize: 16,
  },

  genreList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: theme.defaultMargin,
  },
});
