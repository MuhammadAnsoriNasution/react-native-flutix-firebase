import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeTabScreenProps } from '../routes/types';

type Props = HomeTabScreenProps<'TicketScreen'>;

export default function TicketScreen({}: Props) {
  return (
    <SafeAreaView>
      <Text>TicketScreen</Text>
    </SafeAreaView>
  );
}
