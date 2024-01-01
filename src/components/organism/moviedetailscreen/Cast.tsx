import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { Atoms } from '../..';
import { getCreditService } from '../../../services/movies';
import theme from '../../../utils/theme';

interface Props {
  movieId: string;
}
export default function Cast({ movieId }: Props) {
  const queryCredit = useQuery({
    queryFn: () => getCreditService(movieId),
    queryKey: ['movie-detail-credit', movieId],
  });
  const dataCrew = queryCredit.data?.cast ?? [];
  return (
    <View style={styles.wrapperCastAndCrew}>
      <Atoms.Typhograpy.TitleCard title="Cast & Crew" />
      {queryCredit.isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataCrew}
          renderItem={({ item, index }) => {
            return (
              <Atoms.Card.CardCrew
                cast={item}
                isFirst={index === 0}
                isLast={index + 1 === dataCrew.length}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperCastAndCrew: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: theme.defaultMargin,
  },
});
