import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../routes';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AccountConfirmationScreen'
>;

export default function AccountConfirmationScreen({}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>AccountConfirmation</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
});
