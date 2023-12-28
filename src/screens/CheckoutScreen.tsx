import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import useBookStore from '../store/bookStore';
import { imageBaseUrl } from '../utils/config';
import { daysName } from '../utils/formatterdate';
import theme from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckoutScreen'>;

export default function CheckoutScreen({ navigation }: Props) {
  const { seat: seatStore, movie, schedule } = useBookStore(state => state);
  const dateTime = new Date();
  dateTime.setDate(parseInt(schedule.date));
  const valueDateTime = `${daysName[dateTime.getDay()]
    .split('')
    .splice(0, 3)
    .join('')} ${schedule.date}, ${schedule.jam}:00`;
  return (
    <Moleculs.ContainerScreen
      bgStatusBar={theme.whiteColor}
      titleHeadePage={'Checkout\nMovie'}
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
          <Atoms.ItemOrder label="ID Order" value="22081996" />
          <Atoms.ItemOrder label="Cinema" value={schedule.cinema} />
          <Atoms.ItemOrder label="Date & Time" value={valueDateTime} />
          <Atoms.ItemOrder label="Seat Number" value={seatStore.join(', ')} />
          <Atoms.ItemOrder label="Price" value="Rp 12.500.000 x 2" />
          <Atoms.ItemOrder label="Fee" value="Rp 290.000" />
          <Atoms.ItemOrder
            label="Total"
            value="Rp 25.106.000"
            valueSemiBold={true}
          />
        </View>
        <Atoms.Gap height={20} />
        <View style={styles.lineHorizontal} />
        <Atoms.Gap height={20} />
        <Atoms.ItemOrder
          label="Your Wallet"
          value="Rp 25.106.000"
          valueSemiBold={true}
          colorValue={theme.greenColor}
        />
        <Atoms.Gap height={36} />
        <View style={styles.containerBtn}>
          <Atoms.Button.RectButton
            background="green"
            label="Checkout Now"
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
