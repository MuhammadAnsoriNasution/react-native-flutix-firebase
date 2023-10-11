import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketScreen'>;

export default function TicketScreen({}: Props) {
  return (
    <View>
      <Text>TicketScreen</Text>
    </View>
  );
}
