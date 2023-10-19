import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../routes/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;

export default function MainScreen({}: Props) {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.content]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'column',
    zIndex: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
  subContent: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 0,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
});
