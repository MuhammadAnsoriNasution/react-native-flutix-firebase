import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import * as images from '../../../assets/images';
import theme from '../../../utils/theme';
import { TransactionTypes } from '../../../types/transaction';
import { imageBaseUrl } from '../../../utils/config';
import { formatterCurrency } from '../../../utils/currency';
const width = Dimensions.get('screen').width;
interface Props {
  transaction: TransactionTypes;
}
export default function CardTransactionHistoryWallet({ transaction }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={
          transaction.title === ''
            ? images.bg_topup
            : { uri: imageBaseUrl + 'w500' + transaction.picture }
        }
        style={styles.image}
      />
      <View style={styles.containerDetail}>
        <Text style={styles.title} numberOfLines={2}>
          {transaction.title}
        </Text>
        <Text
          style={[
            styles.amount,
            parseInt(transaction.amount) < 0 ? styles.redColor : {},
          ]}>
          IDR {formatterCurrency({ nominal: parseInt(transaction.amount) })}
        </Text>
        <Text style={styles.desc}>{transaction.subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    width: 70,
    height: 90,
    borderRadius: 8,
  },
  containerDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
    width: width - 134,
  },
  amount: {
    ...theme.styles.whiteNumberFont,
    color: theme.greenColor,
    fontSize: 12,
  },
  redColor: {
    color: theme.redColor,
  },
  desc: {
    ...theme.styles.whiteNumberFont,
    fontSize: 12,
    color: theme.greyColor3,
  },
});
