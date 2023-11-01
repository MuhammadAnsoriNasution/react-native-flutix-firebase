import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';
import theme from '../utils/theme';
import * as images from '../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export default function SignUpScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Atoms.HeaderPage
        onPress={() => navigation.goBack()}
        title={'Create New\nYour Account'}
      />
      <View style={styles.container}>
        <View style={styles.wrapperUserPic}>
          <Image source={images.user_pic} style={styles.userPic} />
          <TouchableOpacity style={styles.btnAdd}>
            <Image source={images.btn_add_photo} style={styles.btnAddImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperInput}>
          <Atoms.Input.TextInput label="Full Name" />
          <Atoms.Input.TextInput label="Email Address" />
          <Atoms.Input.TextInput label="Password" secureTextEntry />
          <Atoms.Input.TextInput label="Confirm Password" secureTextEntry />
        </View>
        <Atoms.Button.ButtonRoundedIcon
          name="arrowright"
          onPress={() => navigation.navigate('PreferenceScreen')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.whiteColor,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
  wrapperUserPic: {
    position: 'relative',
    marginTop: 22,
    display: 'flex',
    alignItems: 'center',
  },
  userPic: {
    width: 90,
    height: 90,
  },
  btnAdd: {
    position: 'absolute',
    bottom: -10,
  },
  btnAddImage: {
    height: 24,
    width: 24,
  },
  wrapperInput: {
    width: '100%',
    marginTop: 47,
    display: 'flex',
    gap: 27,
    paddingHorizontal: theme.defaultMargin,
    marginBottom: 30,
  },
});
