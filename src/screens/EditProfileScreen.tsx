import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'EditProfileScreen'>;

export default function EditProfileScreen({}: Props) {
  return (
    <View>
      <Text>EditProfileScreen</Text>
    </View>
  );
}
