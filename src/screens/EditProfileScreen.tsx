import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as images from '../assets/images';
import { Atoms, Moleculs } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
type Props = NativeStackScreenProps<RootStackParamList, 'EditProfileScreen'>;

export default function EditProfileScreen({}: Props) {
  return (
    <Moleculs.ContainerScreen
      titleHeadePage={'Edit Your\nProfile'}
      bgStatusBar={theme.whiteColor}>
      <View style={styles.containerAvatar}>
        <Image source={images.user_pic} style={styles.avatar} />
        <TouchableOpacity style={styles.avatarAction}>
          <Image source={images.btn_add_photo} style={styles.icAvatarAction} />
        </TouchableOpacity>
      </View>
      <Atoms.Gap height={40} />
      <View style={styles.containerInput}>
        <Atoms.Input.TextInput label="Full Name" />
        <Atoms.Input.TextInput label="Email Address" />
        <Atoms.Input.TextInput label="Password" />
        <Atoms.Input.TextInput label="Confirm Password" secureTextEntry />
        <View style={styles.centerButtonSubmit}>
          <Atoms.Button.RectButton
            background="green"
            label="Update My Profile"
            onPress={() => {}}
          />
        </View>
      </View>
    </Moleculs.ContainerScreen>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    width: 90,
    height: 90,
  },
  avatarAction: {
    position: 'absolute',
    bottom: -13,
  },
  icAvatarAction: {
    width: 28,
    height: 28,
  },
  containerInput: {
    paddingHorizontal: theme.defaultMargin,
    display: 'flex',
    flexDirection: 'column',
    gap: 19,
  },
  centerButtonSubmit: {
    marginTop: 11,
    display: 'flex',
    alignItems: 'center',
  },
});
