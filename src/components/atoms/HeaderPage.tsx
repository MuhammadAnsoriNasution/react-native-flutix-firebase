import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../utils/theme';

interface Props {
  title?: string;
  onPress: () => void;
}
export default function HeaderPage({ title, onPress }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.goBack}>
        <IconAntDesign name="arrowleft" size={24} color={theme.blackColor} />
      </Pressable>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>{title}</Text>
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
});
