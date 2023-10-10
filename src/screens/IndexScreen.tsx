import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View } from 'react-native';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
export default function IndexScreen({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
}
