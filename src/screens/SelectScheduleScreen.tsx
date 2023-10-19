import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SelectScheduleScreen'>;

export default function SelectScheduleScreen({}: Props) {
  return (
    <View>
      <Text>SelectScheduleScreen</Text>
    </View>
  );
}
