import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../../../utils/theme';

interface Props {
  title: string;
}
export default function TitleCard({ title }: Props) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: { marginLeft: 24, ...theme.styles.blackTextFont, fontSize: 16 },
});
