import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../../utils/theme';

interface Props {
  label: string;
  onPress: () => void;
  background?: 'green';
  disabled?: boolean;
}
export default function RectButton({
  label,
  onPress,
  background,
  disabled,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor:
            disabled === true
              ? theme.greyColor
              : background !== undefined
              ? theme.greenColor
              : theme.mainColor,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    paddingTop: 11,
    paddingBottom: 13,
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    ...theme.styles.whiteTextFont,
  },
});
