import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketDetailScreen'>;

export default function TicketDetailScreen({}: Props) {
  return (
    <View>
      <Text>TicketDetailScreen</Text>
    </View>
  );
}
