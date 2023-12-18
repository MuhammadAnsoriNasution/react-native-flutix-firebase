import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Dashed from './Dashed';
interface Props {
  label: string;
  icon: number;
  onPress?: () => void;
}
export default function MenuProfile({ label, icon, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.menu} onPress={onPress}>
      <Image source={icon} style={styles.menuIcon} />
      <Text>{label}</Text>
      <View style={styles.containerDash}>
        <Dashed />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  containerDash: {
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    width: '100%',
  },
});
