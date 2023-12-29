import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { BackHandler, Image, StyleSheet, Text, View } from 'react-native';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import useBookStore from '../store/bookStore';
import useUserStore from '../store/userStore';
import { imageBaseUrl } from '../utils/config';
import { formatterCurrency } from '../utils/currency';
import { daysName } from '../utils/formatterdate';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckoutScreen'>;

export default function CheckoutScreen({ navigation }: Props) {
  const { seat: seatStore, movie, schedule } = useBookStore(state => state);
  const { profile } = useUserStore(state => state);
  const dateTime = new Date();
  dateTime.setDate(parseInt(schedule.date));
  const valueDateTime = `${daysName[dateTime.getDay()]
    .split('')
    .splice(0, 3)
    .join('')} ${schedule.date}, ${schedule.jam}:00`;
  const total = 30000 * seatStore.length + 1500 * seatStore.length;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => false);
  }, []);
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      titleHeadePage={'Checkout\nMovie'}
      barStyle="dark-content"
      goBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={styles.containerDetailMovie}>
          <Image
            source={{ uri: `${imageBaseUrl}w500${movie?.poster_path}` }}
            style={styles.poster}
          />
          <View style={styles.detailMovie}>
            <Text style={styles.title} numberOfLines={1}>
              {movie?.title}
            </Text>
            <Text style={styles.genre}>
              {movie?.genres.map(gen => gen.name).join(', ')} –{' '}
              {movie?.original_language}
            </Text>
            <Atoms.RatingStart voteAverage={7} color={theme.greyColor3} />
          </View>
        </View>
        <Atoms.Gap height={20} />
        <View style={styles.lineHorizontal} />
        <Atoms.Gap height={22} />
        <View style={styles.containerOrder}>
          <Atoms.ItemOrder label="ID Order" value={schedule.bookingCode} />
          <Atoms.ItemOrder label="Cinema" value={schedule.cinema} />
          <Atoms.ItemOrder label="Date & Time" value={valueDateTime} />
          <Atoms.ItemOrder label="Seat Number" value={seatStore.join(', ')} />
          <Atoms.ItemOrder
            label="Price"
            value={`Rp. 30.000 X ${seatStore.length}`}
          />
          <Atoms.ItemOrder
            label="Fee"
            value={`Rp 1.500 X ${seatStore.length}`}
          />
          <Atoms.ItemOrder
            label="Total"
            value={formatterCurrency({ nominal: total, prefix: 'Rp. ' })}
            valueSemiBold={true}
          />
        </View>
        <Atoms.Gap height={20} />
        <View style={styles.lineHorizontal} />
        <Atoms.Gap height={20} />
        <Atoms.ItemOrder
          label="Your Wallet"
          value={formatterCurrency({
            nominal: parseInt(profile.balance),
            prefix: 'Rp. ',
          })}
          valueSemiBold={true}
          colorValue={
            parseInt(profile.balance) >= total
              ? theme.greenColor
              : theme.redColor
          }
        />
        <Atoms.Gap height={36} />
        <View style={styles.containerBtn}>
          <Atoms.Button.RectButton
            background={parseInt(profile.balance) >= total ? 'green' : 'red'}
            label={
              parseInt(profile.balance) >= total
                ? 'Checkout Now'
                : 'Top Up My Wallet'
            }
            onPress={() => navigation.navigate('SuccessScreen')}
          />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.defaultMargin,
  },
  containerDetailMovie: {
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  poster: {
    width: 70,
    height: 90,
    borderRadius: 8,
  },
  detailMovie: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
  },
  genre: { ...theme.styles.greyTextFont, fontSize: 12 },
  lineHorizontal: {
    borderWidth: 1,
    borderColor: theme.greyColor,
  },
  containerOrder: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  containerBtn: { display: 'flex', alignItems: 'center', marginBottom: 20 },
});
