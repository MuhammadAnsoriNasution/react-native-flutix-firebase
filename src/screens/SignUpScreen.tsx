import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderPage } from '../components/atoms';
import { RootStackParamList } from '../routes';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export default function SignUpScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderPage
        onPress={() => navigation.goBack()}
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
