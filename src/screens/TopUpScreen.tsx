import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'TopUpScreen'>;

export default function TopUpScreen({}: Props) {
  return (
    <View>
      <Text>TopUpScreen</Text>
    </View>
  );
}
