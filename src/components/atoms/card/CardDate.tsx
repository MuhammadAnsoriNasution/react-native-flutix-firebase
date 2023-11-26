import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../../utils/theme';

interface Props {
  status: 'enabled' | 'disabled' | 'selected';
  isFirst: boolean;
  isLast: boolean;
}
export default function CardDate({ status, isFirst, isLast }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        status === 'disabled'
          ? styles.isDisabled
          : status === 'enabled'
          ? styles.isEnabled
          : styles.isSelected,
        { marginLeft: isFirst ? 24 : 16, marginRight: isLast ? 24 : 0 },
      ]}>
      <Text
        style={[
          styles.text,
          status === 'disabled' ? styles.textDisabled : styles.textSelected,
        ]}>
        SUN
      </Text>
      <Text
        style={[
          styles.text,
          status === 'disabled' ? styles.textDisabled : styles.textSelected,
        ]}>
        22
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 90,
    display: 'flex',
    gap: 6,
    alignItems: 'center',
    paddingHorizontal: 4,
    borderRadius: 6,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  textSelected: {
    ...theme.styles.blackTextFont,
  },
  textDisabled: { ...theme.styles.blackTextFont, color: theme.greyColor2 },
  isSelected: {
    backgroundColor: theme.accentColor2,
  },
  isDisabled: {
    backgroundColor: theme.secondary,
  },
  isEnabled: {
    backgroundColor: theme.whiteColor,
    borderColor: theme.greyColor,
    borderWidth: 1,
  },
});
