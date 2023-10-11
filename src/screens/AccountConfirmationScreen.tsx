import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AccountConfirmationScreen'
>;

export default function AccountConfirmationScreen({}: Props) {
  return (
    <View>
      <Text>AccountConfirmation</Text>
    </View>
  );
}
