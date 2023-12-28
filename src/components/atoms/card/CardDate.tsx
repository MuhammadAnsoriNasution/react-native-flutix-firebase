import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../../utils/theme';
import { daysName } from '../../../utils/formatterdate';

interface Props {
  status: 'enabled' | 'disabled' | 'selected';
  isFirst: boolean;
  isLast: boolean;
  date: Date;
  onPress?: () => void;
}
export default function CardDate({
  status,
  isFirst,
  isLast,
  date,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
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
        {daysName[date.getDay()].split('').splice(0, 3)}
      </Text>
      <Text
        style={[
          styles.text,
          status === 'disabled' ? styles.textDisabled : styles.textSelected,
        ]}>
        {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
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
