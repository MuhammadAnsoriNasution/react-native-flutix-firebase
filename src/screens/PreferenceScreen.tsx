import { View, Text } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'PreferenceScreen'>;
export default function PreferenceScreen({}: Props) {
  return (
    <View>
      <Text>PreferenceScreen</Text>
    </View>
  );
}
