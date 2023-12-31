import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  TextInput as TextInputR,
  View,
} from 'react-native';
import theme from '../../../utils/theme';
import { handleChangeFormatRupiah } from '../../../utils/currency';

interface Props extends TextInputProps {
  label: string;
  errorColor?: string;
  isCurrency?: boolean;
  isNumber?: boolean;
}
export default function TextInput({
  label,
  style,
  isNumber,
  errorColor,
  isCurrency,
  ...props
}: Props) {
  const [valueLocal, setValueLocal] = useState('');

  const [isFocus, setIsFocus] = useState(
    props.value !== '' || props.value !== undefined ? false : true,
  );

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
            color:
              errorColor !== undefined
                ? errorColor
                : isFocus
                ? theme.accentColor2
                : theme.greyColor2,
          },
        ]}>
        {label}
      </Text>

      <TextInputR
        ref={refInput}
        style={[
          styles.textinput,
          isNumber === true ? styles.number : {},
          {
            borderColor:
              errorColor !== undefined
                ? errorColor
                : isFocus
                ? theme.accentColor2
                : theme.greyColor2,
          },
        ]}
        {...props}
        onChangeText={e => {
          setValueLocal(
            isCurrency === true ? handleChangeFormatRupiah(e, 'Rp. ') : e,
          );
          if (props.onChangeText !== undefined) {
            props.onChangeText(
              isCurrency === true ? e.replace(/[^\d]/g, '') : e,
            );
          }
        }}
        value={valueLocal}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          if (valueLocal === '') {
            setIsFocus(false);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    borderWidth: 1,
    borderColor: theme.greyColor2,
    padding: 13,
    borderRadius: 6,
    zIndex: 0,
  },
  number: {
    ...theme.styles.whiteNumberFont,
    color: theme.blackColor,
  },
});
