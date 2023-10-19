import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export default function SuccessScreen({}: Props) {
  return (
    <View>
      <Text>SuccessScreen</Text>
    </View>
  );
}
