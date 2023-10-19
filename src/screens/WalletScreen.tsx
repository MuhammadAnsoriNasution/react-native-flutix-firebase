import { View, Text } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'WalletScreen'>;

export default function WalletScreen({}: Props) {
  return (
    <View>
      <Text>WalletScreen</Text>
    </View>
  );
}
