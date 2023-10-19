import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import theme from '../../../utils/theme';
import TabClipBg from '../TabClipBg';

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

export default function FloatTabButton({ bgColor, ...props }: Props) {
  return (
    <View style={styles.container}>
      <TabClipBg color={bgColor} style={styles.background} />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <IconEntypo name="wallet" size={24} color={theme.whiteColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: theme.mainColor,
  },
});
