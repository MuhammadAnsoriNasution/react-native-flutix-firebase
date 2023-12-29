import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import * as images from '../assets/images';
import useBookStore from '../store/bookStore';
import { imageBaseUrl } from '../utils/config';
type Props = NativeStackScreenProps<RootStackParamList, 'SelectSeatScreen'>;

export default function SelectSeatScreen({ navigation }: Props) {
  const numberOfSeats = [3, 5, 5, 5, 5];
  const { updateSeat, seat: seatStore, movie } = useBookStore(state => state);

  const handleSelect = (seatLabel: string) => {
    const check = seatStore.find(item => item === seatLabel);
    updateSeat(
      check !== undefined
        ? seatStore.filter(item => item !== seatLabel)
        : seatStore.concat([seatLabel]),
    );
  };

  return (
    <Moleculs.ContainerScreen
      posterPath={`${imageBaseUrl}w500${movie?.poster_path}`}
      bgStatusBar={theme.whiteColor}
      barStyle="dark-content"
      titleHeadePage={movie?.title}
      goBack={() => navigation.goBack()}>
      <Atoms.Gap height={33} />
      <View style={styles.container}>
        <Image source={images.screen} style={styles.screen} />
        <View style={styles.containerSeat}>
          {numberOfSeats.map((seat, indexSeat) => {
            return (
              <View style={styles.containerRowSheat} key={indexSeat}>
                {Array.from(Array(seat).keys()).map((item, index) => {
                  const seatLabel = `${String.fromCharCode(indexSeat + 65)}${
                    item + 1
                  }`;
                  return (
                    <Atoms.Card.SelecttableCard
                      onPress={() => handleSelect(seatLabel)}
                      width={40}
                      height={40}
                      status={
                        seatStore.includes(seatLabel)
                          ? 'selected'
                          : index === 0
                          ? 'disabled'
                          : 'enabled'
                      }
                      key={seatLabel}
                      label={seatLabel}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
        <View style={styles.wrapperNote}>
          <Note label="Available" />
          <Note label="Booked" />
          <Note label="Selected" />
        </View>
        <View style={styles.containerbtnNext}>
          <Atoms.Button.ButtonRoundedIcon
            name="arrowright"
            disabled={seatStore.length < 1}
            onPress={() => navigation.navigate('CheckoutScreen')}
          />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}
const styles = StyleSheet.create({
  containerbtnNext: {
    marginTop: 30,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    width: 277,
    height: 84,
  },
  containerSeat: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  containerRowSheat: { display: 'flex', flexDirection: 'row', gap: 16 },
  wrapperNote: {
    display: 'flex',
    flexDirection: 'row',
    gap: 27,
    marginTop: 23,
  },
  containerSelectedNote: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  noteColor: {
    borderRadius: 6,
    width: 20,
    height: 20,
  },
  available: {
    backgroundColor: theme.whiteColor,
    borderColor: theme.greyColor,
    borderWidth: 1,
  },
  booked: {
    backgroundColor: theme.secondary,
  },
  selected: {
    backgroundColor: theme.accentColor2,
  },
  labelNote: {
    ...theme.styles.greyTextFont,
    fontSize: 10,
  },
});

interface PropsNote {
  label: 'Available' | 'Booked' | 'Selected';
}
function Note({ label }: PropsNote) {
  return (
    <View style={styles.containerSelectedNote}>
      <View
        style={[
          styles.noteColor,
          label === 'Available'
            ? styles.available
            : label === 'Booked'
            ? styles.booked
            : styles.selected,
        ]}
      />
      <Text style={styles.labelNote}>{label}</Text>
    </View>
  );
}
