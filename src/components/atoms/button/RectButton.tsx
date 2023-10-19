import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../../../utils/theme';

interface Props {
  label: string;
  onPress: () => void;
  background?: 'green';
}
export default function RectButton({ label, onPress, background }: Props) {
  return (
    <Pressable
      style={[
        styles.btn,
        {
          backgroundColor:
            background !== undefined ? theme.greenColor : theme.mainColor,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
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