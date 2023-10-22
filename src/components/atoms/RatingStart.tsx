import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Gap from './Gap';
import theme from '../../utils/theme';

interface Props {
  voteAverage: number;
  starSize: number;
  color: string;
}
export default function RatingStart({ voteAverage }: Props) {
  const n = Math.round(voteAverage / 2);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <FontAwesome
          key={item}
          name="star"
          color={index < n ? theme.accentColor2 : theme.greyColor2}
        />
      ))}
      <Gap width={13} />
      <Text style={styles.rating}>{voteAverage}/10</Text>
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
    fontWeight: '300',
    fontSize: 12,
  },
});
