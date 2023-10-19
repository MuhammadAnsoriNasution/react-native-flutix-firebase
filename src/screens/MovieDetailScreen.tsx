import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetailScreen'>;

export default function MovieDetailScreen({}: Props) {
  return (
    <View>
      <Text>MovieDetailScreen</Text>
    </View>
  );
}
