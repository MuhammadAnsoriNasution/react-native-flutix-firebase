import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeTabScreenProps } from '../routes/types';

type Props = HomeTabScreenProps<'MovieScreen'>;

export default function MovieScreen({}: Props) {
  return (
    <SafeAreaView>
      <Text>MovieScreen</Text>
    </SafeAreaView>
  );
}
