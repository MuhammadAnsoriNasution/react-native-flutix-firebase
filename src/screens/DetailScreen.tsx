import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>;

export default function DetailScreen({}: Props) {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
}
