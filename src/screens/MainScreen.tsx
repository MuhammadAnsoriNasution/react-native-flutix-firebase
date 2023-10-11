import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

export default function MainScreen({}: Props) {
  return (
    <View>
      <Text>MainScreen</Text>
    </View>
  );
}
