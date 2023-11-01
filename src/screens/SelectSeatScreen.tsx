import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import * as images from '../assets/images';
type Props = NativeStackScreenProps<RootStackParamList, 'SelectSeatScreen'>;

export default function SelectSeatScreen({ navigation }: Props) {
  const numberOfSeats = [3, 5, 5, 5, 5];

  return (
    <Moleculs.ContainerScreen
      posterPath={images.poster}
      bgStatusBar={theme.whiteColor}
      titleHeadePage={'Avengers\nInfinity War'}
      goBack={() => navigation.goBack()}>
      <Atoms.Gap height={33} />
      <View style={styles.container}>
        <Image source={images.screen} style={styles.screen} />
        <View style={styles.containerSeat}>
          {numberOfSeats.map((seat, index) => {
            return (
              <View style={styles.containerRowSheat}>
                {Array.from(Array(seat).keys()).map(item => {
                  return (
                    <Atoms.Card.SelecttableCard
                      width={40}
                      height={40}
                      key={`${String.fromCharCode(index + 65)} ${item + 1}`}
                      label={`${String.fromCharCode(index + 65)} ${item + 1}`}
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
