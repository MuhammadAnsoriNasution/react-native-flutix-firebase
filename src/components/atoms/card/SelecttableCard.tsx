import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme from '../../../utils/theme';

const width =
  Dimensions.get('window').width / 2 -
  (theme.defaultMargin + 0.5 * theme.defaultMargin);
interface Props extends TouchableOpacityProps {
  isSelected: boolean;
  label: string;
}
export default function SelecttableCard({
  isSelected,
  label,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            isSelected === true ? theme.accentColor2 : theme.whiteColor,
        },
      ]}
      {...props}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: theme.greyColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    borderRadius: 6,
  },
  label: {
    ...theme.styles.blackTextFont,
    fontSize: 16,
    fontWeight: '400',
  },
});
