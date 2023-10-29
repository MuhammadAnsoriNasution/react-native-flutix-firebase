import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../utils/theme';

interface Props {
  title?: string;
  onPress: () => void;
  isLight?: boolean;
}
export default function HeaderPage({ title, onPress, isLight }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.goBack}>
        <IconAntDesign
          name="arrowleft"
          size={24}
          color={isLight ? theme.whiteColor : theme.blackColor}
        />
      </Pressable>
      <View style={styles.wrapperTitle}>
        <Text
          style={[styles.title, isLight ? styles.textLight : styles.textDark]}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: theme.defaultMargin,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  goBack: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  wrapperTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 28,
  },
  textLight: {
    color: theme.whiteColor,
  },
  textDark: {
    color: theme.blackColor,
  },
});
