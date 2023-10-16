import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderPage } from '../components/atoms';
import { RootStackParamList } from '../routes';
import theme from '../utils/theme';
import { StyleSheet } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export default function SignUpScreen({}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderPage
        onPress={() => console.log('')}
        title={'Create New\nYour Account'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.whiteColor,
    flex: 1,
  },
});
