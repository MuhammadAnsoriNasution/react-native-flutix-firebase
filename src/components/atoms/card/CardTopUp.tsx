import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../../utils/theme';
import { formatterCurrency } from '../../../utils/currency';

interface Props {
  width?: number;
  height?: number;
  amount: number;
  isSelected?: boolean;
  onPress?: () => void;
}
export default function CardTopUp({
  width,
  height,
  amount,
  isSelected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? styles.selected : {},
        { width, height },
      ]}
      onPress={onPress}>
      <Text
        style={[styles.currency, isSelected ? styles.currencySelected : {}]}>
        IDR
      </Text>
      <Text style={styles.amount}>
        {formatterCurrency({ nominal: amount })}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.greyColor2,
    width: '30.24%',
    marginBottom: 16,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
  },
  currency: {
    ...theme.styles.greyTextFont,
    color: theme.greyColor4,
    fontSize: 16,
  },
  amount: {
    ...theme.styles.whiteNumberFont,
    color: theme.blackColor,
    fontSize: 16,
  },
  selected: {
    backgroundColor: theme.accentColor2,
    borderWidth: 0,
  },
  currencySelected: {
    color: theme.blackColor,
  },
});
