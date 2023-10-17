import React from 'react';
import { View } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}
export default function Gap({ width, height }: Props) {
  return <View style={{ width, height }} />;
}
