import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from '../assets/images';
import { Atoms } from '../components';
import { RootStackParamList } from '../routes/types';

import { regexEmail, regexPassword } from '../utils/regex';
import theme from '../utils/theme';
import { launchImageLibrary } from 'react-native-image-picker';
import useUserStore from '../store/userStore';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export default function SignUpScreen({ navigation }: Props) {
  const { profile, updateProfile } = useUserStore(state => state);
  const handlePickImage = async () => {
    launchImageLibrary({ mediaType: 'photo' }).then(ress => {
      if (
        ress.assets !== undefined &&
        ress.assets.length > 0 &&
        ress.assets[0].uri !== undefined
      ) {
        console.log(ress.assets[0].uri, 'ini bahan upload');
        updateProfile({ ...profile, avatarUpload: ress.assets[0].uri });
      }
    });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Atoms.HeaderPage
        onPress={() => navigation.goBack()}
        title={'Create New\nYour Account'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.wrapperUserPic}>
              <Image
                source={
                  profile.avatarUpload !== ''
                    ? { uri: profile.avatarUpload }
                    : images.user_pic
                }
                style={styles.userPic}
              />
              <TouchableOpacity style={styles.btnAdd} onPress={handlePickImage}>
                <Image
                  source={images.btn_add_photo}
                  style={styles.btnAddImage}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.wrapperInput}>
              <Atoms.Input.TextInput
                label="Full Name"
                value={profile.fullName}
                onChangeText={e => updateProfile({ ...profile, fullName: e })}
              />
              <Atoms.Input.TextInput
                label="Email Address"
                value={profile.email}
                onChangeText={e => updateProfile({ ...profile, email: e })}
              />
              <Atoms.Input.TextInput
                label="Password"
                secureTextEntry
                value={profile.password}
                onChangeText={e => updateProfile({ ...profile, password: e })}
              />
              <Atoms.Input.TextInput
                label="Confirm Password"
                secureTextEntry
                value={profile.confirmPassword}
                onChangeText={e =>
                  updateProfile({ ...profile, confirmPassword: e })
                }
              />
            </View>
            <Atoms.Button.ButtonRoundedIcon
              name="arrowright"
              disabled={
                !regexEmail.test(profile.email) ||
                profile.fullName === '' ||
                !regexPassword.test(profile.password) ||
                profile.password !== profile.confirmPassword ||
                profile.avatarUpload === ''
              }
              onPress={() => navigation.navigate('PreferenceScreen')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    resizeMode: 'cover',
    borderRadius: 90,
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
