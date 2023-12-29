import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as images from '../assets/images';
import { Atoms, Moleculs, Organism } from '../components';
import { useQuery } from '@tanstack/react-query';
import { RootStackParamList } from '../routes/types';
import { getMovieDetail } from '../services/movies';
import { imageBaseUrl } from '../utils/config';
import theme from '../utils/theme';
import useBookStore from '../store/bookStore';
type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetailScreen'>;

export default function MovieDetailScreen({ navigation, route }: Props) {
  const updateMovieStore = useBookStore(state => state.updateMovie);
  const query = useQuery({
    queryFn: () => getMovieDetail(route.params.movieId),
    queryKey: ['movie-detail', route.params.movieId],
  });

  return (
    <>
      <Moleculs.ContainerScreen barStyle="light-content">
        <ImageBackground
          source={
            query.data !== undefined
              ? { uri: `${imageBaseUrl}w780${query.data.backdrop_path}` }
              : images.poster
          }
          style={styles.image}>
          <Atoms.HeaderPage
            onPress={() => navigation.goBack()}
            isLight={true}
          />
          <LinearGradient
            style={styles.gradientImage}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0.06 }}
            colors={['#FFFFFF', 'rgba(255,255,255,0)']}
          />
        </ImageBackground>

        <View style={styles.wrapperDetail}>
          <Text style={styles.title}>{query.data?.title ?? '-'}</Text>
          <Text style={styles.genre}>
            {query.data?.genres.map(item => item.name).join(', ')} –{' '}
            {query.data?.spoken_languages.map(item => item.name).join(', ')}
          </Text>
          <Atoms.RatingStart
            voteAverage={query.data?.vote_average ?? 0}
            starSize={0}
            color={theme.greyColor3}
          />
        </View>
        <Organism.Cast movieId={route.params.movieId} />
        <View style={styles.wrapperStoryLine}>
          <Atoms.Typhograpy.TitleCard title="Storyline" />
          <Text style={styles.storyLine}>{query.data?.overview ?? ''}</Text>
        </View>
        <View style={styles.wrapperContinue}>
          <Atoms.Button.RectButton
            label="Continue to Book"
            onPress={() => {
              updateMovieStore(query.data);
              navigation.navigate('SelectScheduleScreen');
            }}
          />
        </View>
      </Moleculs.ContainerScreen>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
    position: 'relative',
    marginBottom: 16,
  },
  gradientImage: {
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  wrapperDetail: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 24,
    marginHorizontal: theme.defaultMargin,
  },
  genre: {
    ...theme.styles.greyTextFont,
    fontSize: 12,
    fontWeight: '400',
  },
  wrapperCastAndCrew: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: theme.defaultMargin,
  },
  wrapperStoryLine: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: 30,
  },
  storyLine: {
    marginHorizontal: theme.defaultMargin,
    ...theme.styles.greyTextFont,
    fontSize: 14,
    fontWeight: '400',
  },
  wrapperContinue: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,
  },
});
