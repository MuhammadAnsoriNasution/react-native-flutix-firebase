import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import Gap from './Gap';
import theme from '../../utils/theme';

interface Props {
  voteAverage: number;
  starSize: number;
  color: string;
}
export default function RatingStart({
  voteAverage = 0,
  starSize = 16,
  color = theme.whiteColor,
}: Partial<Props>) {
  const n = Math.round(voteAverage / 2);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Entypo
          key={item}
          name="star"
          size={starSize}
          color={index < n ? theme.accentColor2 : theme.greyColor2}
        />
      ))}
      <Gap width={6} />
      <Text style={[styles.rating, { color }]}>{voteAverage}/10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...theme.styles.whiteNumberFont,
    fontWeight: '400',
    fontSize: 12,
  },
});
