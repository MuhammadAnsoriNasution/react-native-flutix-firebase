import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { HomeTabParamList, RootStackParamList } from '../../../routes/types';
import { getMovies } from '../../../services/movies';
import { MovieTypes } from '../../../types/movie';
import { Atoms } from '../..';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<HomeTabParamList, 'MovieScreen', undefined>,
    StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
  >;
};

export default function NowPlaying({ navigation }: Props) {
  const query = useQuery({
    queryFn: getMovies,
    queryKey: ['movies'],
  });
  const movies: MovieTypes[] =
    query.data?.results.filter((item, index) => index < 10) ?? [];

  return (
    <View style={styles.wrapperPlaying}>
      <Atoms.Typhograpy.TitleCard title="Now Playing" />
      {query.isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={movies}
          renderItem={({ item, index }) => {
            return (
              <Atoms.Card.CardMovie
                onPress={() =>
                  navigation.navigate('MovieDetailScreen', {
                    movieId: item.id.toString(),
                  })
                }
                movie={item}
                isFirst={index === 0}
                isLast={index === movies.length - 1}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperPlaying: {
    marginTop: 30,
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
  },
});
