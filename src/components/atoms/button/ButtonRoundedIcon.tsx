import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../../utils/theme';

interface Props extends TouchableOpacityProps {
  name: 'arrowright' | 'wallet';
}

export default function ButtonRoundedIcon({ name, ...props }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            props.disabled === true ? theme.greyColor : theme.mainColor,
        },
      ]}
      {...props}>
      <IconAntDesign
        name={name}
        size={24}
        color={props.disabled === true ? theme.greyColor2 : theme.whiteColor}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: theme.greyColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
