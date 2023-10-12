/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  TextInput as TextInputR,
  View,
} from 'react-native';
import theme from '../../../utils/theme';

interface Props extends TextInputProps {
  label: string;
}
export default function TextInput({ label, style, ...props }: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const refInput = useRef<TextInputR>(null);
  return (
    <View style={[styles.container, style]}>
      <Text
        onPress={() => {
          setIsFocus(true);
          refInput.current?.focus();
        }}
        style={[
          styles.label,
          {
            top: isFocus ? -9 : 15,
            color: isFocus ? theme.accentColor2 : theme.greyColor2,
          },
        ]}>
        {label}
      </Text>
      <View
        style={[
          styles.wrapperInput,
          { borderColor: isFocus ? theme.accentColor2 : theme.greyColor2 },
        ]}>
        <TextInputR
          ref={refInput}
          style={[styles.textinput]}
          {...props}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            if (props.value === '' || props.value === undefined) {
              setIsFocus(false);
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrapperInput: {
    position: 'relative',
    borderWidth: 1,
    borderColor: theme.greyColor2,
    padding: 13,
    borderRadius: 6,
    zIndex: 0,
  },
  label: {
    ...theme.styles.greyTextFont,
    position: 'absolute',
    left: 20,
    zIndex: 10,
    color: theme.greyColor2,
    backgroundColor: theme.whiteColor,
    paddingHorizontal: 5,
  },
  textinput: {
    ...theme.styles.blackTextFont,
    fontSize: 16,
  },
});
