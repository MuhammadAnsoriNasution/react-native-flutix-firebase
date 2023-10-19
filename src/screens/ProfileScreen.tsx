import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>;

export default function ProfileScreen({}: Props) {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
}
