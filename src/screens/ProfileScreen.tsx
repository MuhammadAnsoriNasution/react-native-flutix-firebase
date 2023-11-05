import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as images from '../assets/images';
import { Atoms, Moleculs } from '../components';

import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <Moleculs.ContainerScreen
      bgBody={theme.whiteColor}
      goBack={() => navigation.goBack()}
      titleHeadePage=""
      bgStatusBar={theme.whiteColor}>
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <Image source={images.user_pic} style={styles.avatar} />
          <Atoms.Gap height={10} />
          <Text style={styles.nama}>Angga Risky</Text>
          <Atoms.Gap height={8} />
          <Text style={styles.email}>anggaforone@gmail.com</Text>
        </View>
        <Atoms.Gap height={30} />
        <View style={styles.containerMenu}>
          <Atoms.MenuProfile
            icon={images.edit_profile}
            label="Edit Profile"
            onPress={() => navigation.navigate('EditProfileScreen')}
          />
          <Atoms.MenuProfile
            icon={images.my_wallet}
            label="My Wallet"
            onPress={() => navigation.navigate('WalletScreen')}
          />
          <Atoms.MenuProfile icon={images.language} label="Change Language" />
          <Atoms.MenuProfile icon={images.help_centre} label="Help Centre" />
          <Atoms.MenuProfile icon={images.rate} label="Rate Flutix App" />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.defaultMargin,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  containerProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nama: {
    ...theme.styles.blackTextFont,
    fontSize: 18,
  },

  email: {
    ...theme.styles.greyTextFont,
    fontSize: 16,
    fontWeight: '300',
  },
  containerMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
});
