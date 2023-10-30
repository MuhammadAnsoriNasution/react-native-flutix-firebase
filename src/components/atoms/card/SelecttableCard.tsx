import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme from '../../../utils/theme';

const widthDefault =
  Dimensions.get('window').width / 2 -
  (theme.defaultMargin + 0.5 * theme.defaultMargin);
interface Props extends TouchableOpacityProps {
  status: 'enabled' | 'disabled' | 'selected';
  label: string;
  width: number;
  height: number;
}
export default function SelecttableCard({
  status,
  width = widthDefault,
  height = 60,
  label,
  ...props
}: Partial<Props>) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        status === 'disabled'
          ? styles.isDisabled
          : status === 'enabled'
          ? styles.isEnabled
          : styles.isSelected,
        {
          width: width,
          height: height,
        },
      ]}
      {...props}>
      <Text
        style={[
          styles.label,
          status === 'disabled' ? styles.textDisabled : styles.textSelected,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
  },
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
  textSelected: {
    ...theme.styles.whiteNumberFont,
    color: theme.blackColor,
  },
  textDisabled: { ...theme.styles.whiteNumberFont, color: theme.greyColor2 },
});
