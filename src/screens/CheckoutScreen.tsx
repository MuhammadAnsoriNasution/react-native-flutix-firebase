import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../routes/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckoutScreen'>;

export default function CheckoutScreen({}: Props) {
  return (
    <View>
      <Text>CheckoutScreen</Text>
    </View>
  );
}
