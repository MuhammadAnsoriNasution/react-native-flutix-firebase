import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Atoms, Moleculs } from '../components';

import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
type Props = NativeStackScreenProps<RootStackParamList, 'TopUpScreen'>;

const width = Dimensions.get('screen').width - 80;

export default function TopUpScreen({ navigation }: Props) {
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      titleHeadePage="Top Up"
      barStyle="dark-content"
      goBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <Atoms.Input.TextInput label="Amount" isCurrency={true} isNumber />
        <Atoms.Gap height={20} />
        <Text>Choose by Template</Text>
        <Atoms.Gap height={14} />
        <View style={styles.containerTemplate}>
          {[
            50000, 100000, 150000, 200000, 250000, 500000, 1000000, 2500000,
            5000000,
          ].map(item => {
            return (
              <Atoms.Card.CardTopUp
                key={item}
                amount={item}
                width={width / 3}
                isSelected
              />
            );
          })}
        </View>
        <View style={styles.containerButton}>
          <Atoms.Button.RectButton
            label="Top Up Now"
            onPress={() => navigation.navigate('SuccessScreen')}
            background="green"
          />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.defaultMargin,
    paddingTop: 41,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 14,
  },
  containerTemplate: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
  },
});
