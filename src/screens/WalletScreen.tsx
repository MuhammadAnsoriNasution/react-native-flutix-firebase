import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as images from '../assets/images';
import Reflection4 from '../assets/svg/Reflection4';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';

import { transactionWallet } from '../assets/json/data.json';

type Props = NativeStackScreenProps<RootStackParamList, 'WalletScreen'>;

export default function WalletScreen({ navigation }: Props) {
  return (
    <Moleculs.ContainerScreen
      barStyle="dark-content"
      goBack={() => navigation.goBack()}
      bgStatusBar={theme.whiteColor}
      fab={
        <View style={styles.containerFab}>
          <Atoms.Button.ButtonRoundedIcon
            name="wallet"
            onPress={() => navigation.navigate('TopUpScreen')}
          />
        </View>
      }
      titleHeadePage="My Wallet">
      <View style={styles.container}>
        {/* Card */}
        <View style={styles.card}>
          <Reflection4 style={{ position: 'absolute', top: 0, right: 0 }} />
          {/* <Atoms.Gap height={10} /> */}
          <View style={styles.containerCircle}>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
          </View>
          <Atoms.Gap height={24} />
          <Text style={styles.amount}>IDR 904.592.934</Text>
          <Atoms.Gap height={23} />
          <View style={styles.detailCard}>
            <View style={styles.containerCardHolder}>
              <Text style={styles.title}>Card Holder</Text>
              <View style={styles.containerCardValue}>
                <Text style={styles.name}>Angga Risky</Text>
                <Image source={images.ic_check} style={styles.icCheck} />
              </View>
            </View>
            <View style={styles.containerCardId}>
              <Text style={styles.title}>Card ID</Text>
              <View style={styles.containerCardValue}>
                <Text style={styles.name}>BWAFLUTIX</Text>
                <Image source={images.ic_check} style={styles.icCheck} />
              </View>
            </View>
          </View>
        </View>
        {/* end Card */}
        <Atoms.Gap height={20} />
        <Text>Recent Transactions</Text>
        <Atoms.Gap height={12} />
        <FlatList
          contentContainerStyle={{ display: 'flex', gap: 12 }}
          nestedScrollEnabled={true}
          data={transactionWallet}
          scrollEnabled={false}
          renderItem={({}) => {
            return <Atoms.Card.CardTransactionHistoryWallet />;
          }}
        />
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.defaultMargin,
  },
  card: {
    height: 185,
    overflow: 'hidden',
    backgroundColor: theme.mainColor5,
    borderRadius: 15,
    position: 'relative',
    padding: 20,
    display: 'flex',
  },
  amount: {
    ...theme.styles.whiteNumberFont,
    fontWeight: '600',
    fontSize: 28,
    height: 38,
  },
  title: {
    ...theme.styles.whiteTextFont,
    fontSize: 10,
  },
  name: {
    ...theme.styles.whiteTextFont,
    fontSize: 12,
  },
  containerCircle: {
    display: 'flex',
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle1: {
    width: 18,
    height: 18,
    backgroundColor: theme.yellow2,
    borderRadius: 18,
  },
  circle2: {
    width: 30,
    height: 30,
    backgroundColor: theme.accentColor2,
    borderRadius: 30,
  },
  detailCard: { display: 'flex', flexDirection: 'row', gap: 30 },
  containerCardHolder: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  containerCardId: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: 87,
  },
  icCheck: { height: 14, width: 14 },
  containerCardValue: { display: 'flex', flexDirection: 'row', gap: 4 },
  containerFab: {
    position: 'absolute',
    bottom: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
