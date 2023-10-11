import { View, Text } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieScreen'>;

export default function MovieScreen({}: Props) {
  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
}
