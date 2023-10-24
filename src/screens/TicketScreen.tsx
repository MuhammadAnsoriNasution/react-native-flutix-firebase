import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { HomeTabScreenProps } from '../routes/types';
import theme from '../utils/theme';

type Props = HomeTabScreenProps<'TicketScreen'>;

export default function TicketScreen({}: Props) {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.accentColor1 }} />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={theme.accentColor1} />
        <ScrollView style={styles.container}>
          <Text>TicketScreen</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
  container: {
    flex: 1,
    backgroundColor: theme.whiteColor,
  },
});
