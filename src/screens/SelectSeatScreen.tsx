import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SelectSeatScreen'>;

export default function SelectSeatScreen({}: Props) {
  return (
    <Moleculs.ContainerScreen bgStatusBar={theme.whiteColor}>
      <Text>SelectSeatScreen</Text>
    </Moleculs.ContainerScreen>
  );
}
