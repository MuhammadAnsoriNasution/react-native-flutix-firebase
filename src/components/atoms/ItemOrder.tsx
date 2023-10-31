import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../../utils/theme';

interface Props {
  label: string;
  value: string;
  valueSemiBold?: boolean;
  colorValue?: string;
}
export default function ItemOrder({
  label,
  value,
  valueSemiBold,
  colorValue,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[
          styles.value,
          valueSemiBold === true ? styles.fontSemiBold : {},
          { color: colorValue !== undefined ? colorValue : theme.blackColor },
        ]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  label: {
    ...theme.styles.greyTextFont,
    fontSize: 16,
    fontWeight: '400',
  },
  value: {
    ...theme.styles.whiteNumberFont,
    fontSize: 16,
    color: theme.blackColor,
  },
  fontSemiBold: {
    fontWeight: '600',
  },
});
