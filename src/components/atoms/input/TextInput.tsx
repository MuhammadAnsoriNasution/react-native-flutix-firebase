import {
  View,
  Text,
  TextInput as TextInputR,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import React from 'react';

interface Props extends TextInputProps {
  label: string;
}
export default function TextInput({ label, ...props }: Props) {
  return (
    <View style={[styles.container]}>
      <Text>{label}</Text>
      <TextInputR {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});
