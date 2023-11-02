import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as images from '../assets/images';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import QRCode from 'react-native-qrcode-svg';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketDetailScreen'>;

export default function TicketDetailScreen({ navigation }: Props) {
  return (
    <Moleculs.ContainerScreen
      titleHeadePage="Ticket Details"
      bgBody={theme.secondary4}
      bgStatusBar={theme.secondary4}
      goBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <Image source={images.poster} style={styles.image} />
        <View style={styles.containerDetail}>
          <View style={styles.containerDetailMovie}>
            <Text style={styles.title}>Avengers: Infinity Wars</Text>
            <Text style={styles.genre}>Action – English</Text>
            <Atoms.RatingStart voteAverage={5} color={theme.greyColor2} />
          </View>
          <Atoms.Gap height={18} />
          <View style={styles.containerOrder}>
            <Atoms.ItemOrder label="Cinema" value="Paris Van Java" />
            <Atoms.ItemOrder label="Date & Time" value="Sat 21, 12:20" />
            <Atoms.ItemOrder label="Seat Number" value="B3, B4" />
            <Atoms.ItemOrder label="ID Order" value="22081996" />
          </View>
          <View style={styles.dashed} />
          <View style={styles.containerInfoTambahan}>
            <View style={styles.containerUser}>
              <Atoms.ItemOrder
                label="Name"
                value="Angga Risky"
                isVertical={true}
              />
              <Atoms.ItemOrder
                label="Paid"
                value="Rp 180.409"
                isVertical={true}
              />
            </View>
            <View style={styles.containerQr}>
              <QRCode value="http://awesome.link.qr" />
            </View>
          </View>
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: theme.defaultMargin,
    backgroundColor: theme.whiteColor,
    overflow: 'hidden',
  },
  image: {
    height: 170,
    width: '100%',
  },
  containerDetail: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  containerDetailMovie: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
  },
  genre: {
    ...theme.styles.greyTextFont,
    fontSize: 12,
  },
  containerOrder: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 20,
  },
  containerInfoTambahan: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  containerUser: { display: 'flex', gap: 8, flexGrow: 1 },
  dashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    width: '100%',
    borderColor: theme.greyColor,
  },
  containerQr: { width: 100, height: 100, backgroundColor: 'red' },
});
