import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import theme from '../../utils/theme';
const width = Dimensions.get('screen').width;

export default function Dashed() {
  const dash = Math.round((width - 48) / 10);
  return (
    <View style={styles.container}>
      {Array.from({ length: dash }, (value, index) => index).map(item => (
        <View style={styles.dash} key={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    width: '100%',
    overflow: 'hidden',
  },
  dash: {
    width: 10,
    height: 2,
    borderRadius: 10,
    backgroundColor: theme.greyColor,
  },
});
