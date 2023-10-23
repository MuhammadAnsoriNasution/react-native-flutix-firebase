/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import theme from '../../../utils/theme';
import { Image } from 'react-native';

import { getImageFromGenre } from '../../../utils/generateIcon';

interface Props {
  genre: string;
  isFirst: boolean;
}

export default function CardGenre({ genre, isFirst }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          marginLeft: isFirst ? 0 : theme.defaultMargin,
        },
      ]}>
      <View style={styles.wrapperIcon}>
        <Image source={getImageFromGenre(genre)} style={styles.icon} />
      </View>
      <Text style={styles.label}>{genre}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapperIcon: {
    borderRadius: 8,
    backgroundColor: theme.secondary5,
    width: 50,
    height: 50,
    padding: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  label: {
    ...theme.styles.blackTextFont,
    fontWeight: '400',
    fontSize: 12,
  },
});
