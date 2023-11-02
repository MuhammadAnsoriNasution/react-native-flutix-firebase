import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Atoms, Moleculs } from '../components';
import { HomeTabScreenProps } from '../routes/types';
import theme from '../utils/theme';

type Props = HomeTabScreenProps<'TicketScreen'>;

export default function TicketScreen({}: Props) {
  return (
    <Moleculs.ContainerScreen bgBody={theme.greyColor}>
      <View style={styles.head}>
        <Text style={styles.title}>My Tickets</Text>
        <View style={styles.topBar}>
          <TouchableOpacity style={[styles.btnTopBar, styles.roundedLeft]}>
            <Text style={styles.topBarTextActive}>Newest</Text>
            <View style={styles.lineActive} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTopBar}>
            <Text style={styles.topBarTextNotActive}>Oldest</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Atoms.Gap height={20} />
      <View style={styles.containerTicket}>
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
        <Atoms.Card.CardTicket />
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  head: {
    height: 110,
    backgroundColor: theme.accentColor1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'visible',
    width: '100%',
  },
  title: {
    marginHorizontal: theme.defaultMargin,
    marginTop: 20,
    ...theme.styles.whiteTextFont,
    fontSize: 20,
    color: theme.secondary4,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  btnTopBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    position: 'relative',
    paddingVertical: 16,
    overflow: 'hidden',
  },
  roundedLeft: {
    borderBottomLeftRadius: 20,
  },
  roundedRight: {
    borderBottomRightRadius: 20,
  },
  topBarTextActive: {
    ...theme.styles.whiteTextFont,
    fontSize: 16,
  },
  topBarTextNotActive: {
    ...theme.styles.whiteTextFont,
    fontSize: 16,
    color: theme.mainColor4,
  },
  lineActive: {
    height: 4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.accentColor2,
  },
  containerTicket: {
    paddingHorizontal: theme.defaultMargin,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginBottom: 100,
  },
});
