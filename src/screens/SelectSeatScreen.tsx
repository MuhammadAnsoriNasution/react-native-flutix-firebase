import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'SelectSeatScreen'>;

export default function SelectSeatScreen({}: Props) {
  return (
    <View>
      <Text>SelectSeatScreen</Text>
    </View>
  );
}
